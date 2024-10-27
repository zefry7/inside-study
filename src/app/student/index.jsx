import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";
import TitlePage from "../../components/title-page";
import ListMark from "../../components/list-mark";
import DiagramMark from "../../components/diagram-mark";
import CalendarVisit from "../../components/calendar-visit";
import DateFilter from "../../components/date-filter";
import TitleSection from "../../components/title-section";
import SubjectFilter from "../../components/subject-filter";
import RowFilter from "../../components/row-filter";
import ListProblem from "../../components/list-problem";
import axios from "axios";

function Student() {
    const data = useOutletContext()
    const { idStudent } = useParams();
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(11);
    const [subjectSelect, setSubjectSelect] = useState("");
    const [listMark, setListMark] = useState(null);
    const [avgMark, setAvgMark] = useState(0)
    const [avgClass, setAvgClass] = useState(0)

    useEffect(() => {
        async function axiosRequest() {
            const response = await axios({
                method: "GET",
                url: "http://localhost:80/api/mark/" + subjectSelect + "/" + idStudent,
            });

            const result = response.data.map((v, i) => ({
                score: v.score,
                theme: v.theme.title,
                date: v.lesson_date.split("T")[0].split("-").reverse().join("."),
            }));

            const number = (result.reduce((acc, v) => acc += v.score, 0)/result.length).toFixed(1)

            const responseAvgClass = await axios({
                method: "GET",
                url: "http://localhost:80/api/avg_mark/" + subjectSelect + "/" + data.own_group_id,
            });

            setAvgMark(number)

            const avg = (responseAvgClass.data/100.0).toFixed(1)

            setAvgClass(avg)
            setListMark([...result]);
        }

        if (subjectSelect != "") axiosRequest();
    }, [subjectSelect]);

    return (
        <>
            <TitlePage text={"Таранец Александр Викторович"} />
            <RowFilter>
                <DateFilter valueFrom={valueFrom} valueTo={valueTo} setValueFrom={setValueFrom} setValueTo={setValueTo} />
                <SubjectFilter setSubjectSelect={setSubjectSelect} />
            </RowFilter>
            <TitleSection text={"Успеваемость"} />
            <DiagramMark avgMark={avgMark} avgClass={avgClass}/>
            {listMark != null && <ListMark marks={listMark} />}
            <TitleSection text={"Посещаемость"} />
            <CalendarVisit valueFrom={valueFrom} valueTo={valueTo} />
            <TitleSection text={"Проблемы"} />
            <ListProblem />
        </>
    );
}

export default Student;
