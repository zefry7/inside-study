import React from "react";
import TitlePage from "../../components/title-page";
import { useParams } from "react-router";
import ListStudent from "../../components/list-student";

const list = [
    {
        nameClass: "5Б",
        avg: "4.5",
    },
    {
        nameClass: "6A",
        avg: "3.7",
    },
    {
        nameClass: "9Г",
        avg: "4.8",
    },
    {
        nameClass: "4Б",
        avg: "4.1",
    },
];

function Subject() {
    const { idSubject } = useParams();

    return (
        <>
            <TitlePage text={"Список классов по " + idSubject} />
            <ListStudent type={"class"} list={list} link={"/subject/" + idSubject + "/1234"}/>
        </>
    );
}

export default Subject;
