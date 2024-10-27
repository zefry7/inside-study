import React, { useEffect, useState } from "react";
import TitlePage from "../../components/title-page";
import ListStudySubject from "../../components/list-student-subject";
import RowFilter from "../../components/row-filter";
import DateFilter from "../../components/date-filter";
import OrderFilter from "../../components/order-filter";
import axios from "axios";
import { useParams } from "react-router";

function StudyClass() {
    const { idSubject, idClass } = useParams();
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(11);
    const [sortFilter, setSortFilter] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        const mass = [...list];

        console.log(sortFilter);

        if (sortFilter == "По убыванию") {
            mass.sort((a, b) => b.avg - a.avg);
            setList(mass);
        } else if (sortFilter == "По возрастанию") {
            mass.sort((a, b) => a.avg - b.avg);
            setList(mass);
        }
    }, [sortFilter]);

    useEffect(() => {
        async function axiosRequest() {
            const infoStudent = {};

            const response = await axios({
                method: "GET",
                url: "http://localhost:80/api/students/" + idClass,
            });
            const listStudents = await response.data;

            for (let i = 0; i < listStudents.length; ++i) {
                try {
                    const response = await axios({
                        method: "GET",
                        url: "http://localhost:80/api/mark/" + idSubject + "/" + listStudents[i].id,
                    });

                    if (response.request) {
                        const result = response.data.map((v, i) => ({
                            score: v.score,
                            theme: v.theme.title,
                            date: v.lesson_date.split("T")[0].split("-").reverse().join("."),
                        }));

                        infoStudent["fullName"] = listStudents[i].full_name;
                        infoStudent["marks"] = result;
                        infoStudent["avg"] = (result.reduce((acc, v) => (acc += v.score), 0) / result.length).toFixed(1);

                        setList([...list, infoStudent]);
                    }
                } catch (e) {
                    
                }
            }
        }

        axiosRequest();
    }, []);

    return (
        <>
            <TitlePage text={"Список учеников 5Б класса"} />
            <RowFilter>
                <OrderFilter sortFilter={sortFilter} setSortFilter={setSortFilter} />
                <DateFilter valueFrom={valueFrom} valueTo={valueTo} setValueFrom={setValueFrom} setValueTo={setValueTo} />
            </RowFilter>
            <ListStudySubject list={list} />
        </>
    );
}

export default StudyClass;
