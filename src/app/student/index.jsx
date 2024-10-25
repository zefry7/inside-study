import React, { useState } from "react";
import { useParams } from "react-router";
import TitlePage from "../../components/title-page";
import ListMark from "../../components/list-mark";
import DiagramMark from "../../components/diagram-mark";
import CalendarVisit from "../../components/calendar-visit";
import DateFilter from "../../components/date-filter";
import TitleSection from "../../components/title-section";
import SubjectFilter from "../../components/subject-filter";
import RowFilter from "../../components/row-filter";
import ListProblem from "../../components/list-problem";

function Student() {
    const { idStudent } = useParams();
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(11);

    

    return (
        <>
            <TitlePage text={"Таранец Александр Викторович"} />
            <RowFilter>
                <DateFilter valueFrom={valueFrom} valueTo={valueTo} setValueFrom={setValueFrom} setValueTo={setValueTo} />
                <SubjectFilter />
            </RowFilter>
            <TitleSection text={"Успеваемость"} />
            <DiagramMark />
            <ListMark />
            <TitleSection text={"Посещаемость"} />
            <CalendarVisit valueFrom={valueFrom} valueTo={valueTo} />
            <TitleSection text={"Проблемы"} />
            <ListProblem />
        </>
    );
}

export default Student;
