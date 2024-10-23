import React from "react";
import { useParams } from "react-router";
import TitlePage from "../../components/title-page";
import ListMark from "../../components/list-mark";
import Dropdown from "../../components/dropdown";
import DiagramMark from "../../components/diagram-mark";

function Student() {
    const { idStudent } = useParams()

    return <>
        <TitlePage text={"Таранец Александр Викторович"}/>
        <Dropdown textButton={"Предмет"}/>
        <DiagramMark />
        <ListMark />
    </>
}

export default Student;