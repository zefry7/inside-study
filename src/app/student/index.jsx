import React, { useState } from "react";
import { useParams } from "react-router";
import TitlePage from "../../components/title-page";
import ListMark from "../../components/list-mark";
import Dropdown from "../../components/dropdown";
import DiagramMark from "../../components/diagram-mark";
import CalendarVisit from "../../components/calendar-visit";
import RowFilter from "../../components/row-filter";

function Student() {
    const { idStudent } = useParams()
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(11);


    return <>
        <TitlePage text={"Таранец Александр Викторович"}/>
        <RowFilter valueFrom={valueFrom} valueTo={valueTo} setValueFrom={setValueFrom} setValueTo={setValueTo}/>
        <DiagramMark />
        <ListMark />
        <CalendarVisit valueFrom={valueFrom} valueTo={valueTo}/>
    </>
}

export default Student;