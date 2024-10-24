import React from "react";
import TitlePage from "../../components/title-page";
import ListStudent from "../../components/list-student";

const data = [
    "Таранец Александр Викторович",
    "Таранец Александр Викторович",
    "Таранец Александр Викторович",
    "Таранец Александр Викторович",
    "Таранец Александр Викторович",
    "Таранец Александр Викторович",
    "Таранец Александр Викторович",
    "Таранец Александр Викторович",
];
const nameClass = "6Б";

function MainClass() {

    return (
        <>
            <TitlePage text={`Список учеников ${nameClass} класса`} />
            <ListStudent list={data} />
        </>
    );
}

export default MainClass;
