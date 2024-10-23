import React from "react";
import List from "../../components/list";
import TitlePage from "../../components/title-page";
import ItemStudent from "../../components/item-student";

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
    const itemList = (v) => {
        return <ItemStudent fio={v} />;
    };

    return (
        <>
            <TitlePage text={`Список учеников ${nameClass} класса`} />
            <List list={data} itemCreate={itemList}></List>
        </>
    );
}

export default MainClass;
