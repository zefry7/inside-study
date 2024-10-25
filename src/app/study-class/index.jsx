import React, { useEffect, useState } from "react";
import TitlePage from "../../components/title-page";
import ListStudySubject from "../../components/list-student-subject";
import RowFilter from "../../components/row-filter";
import DateFilter from "../../components/date-filter";
import OrderFilter from "../../components/order-filter";

const data = [
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 3.5,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 4.6,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 3.8,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 3.5,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 4.6,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 3.8,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 3.5,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 2.7,
        marks: [],
    },
    {
        fio: "Алексеев Виктор Алесеевич",
        avg: 3.8,
        marks: [],
    },
];

function StudyClass() {
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(11);
    const [sortFilter, setSortFilter] = useState("");
    const [list, setList] = useState(data);

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
