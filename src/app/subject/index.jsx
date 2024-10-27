import React, { useEffect, useState } from "react";
import TitlePage from "../../components/title-page";
import { useOutletContext, useParams } from "react-router";
import ListStudent from "../../components/list-student";
import axios from "axios";

const typeClass = ["A", "Б", "В", "Г"]


function Subject() {
    const data = useOutletContext()
    const { idSubject } = useParams();
    const [list, setList] = useState([])

    useEffect(() => {
        const subject = data.disciplines.filter((v) => v.id == idSubject)[0]
        

        async function axiosRequest() {
            const mass = []
            for(let i = 0; i < subject.classes.length; ++i) {
                const url = "http://localhost:80/api/avg_mark/" + idSubject + "/" + subject.classes[i].class_id

                const response = await axios({
                    method: "GET",
                    url: url
                })

                const nameClass = subject.classes[i].class_title.split("-")[0] + typeClass[Number(subject.classes[i].class_title.split("-")[1]) - 1]

                mass.push({ idClass: subject.classes[i].class_id, nameClass: nameClass, avgClass: (response.data/100.0).toFixed(1)})
                
            }                
            setList([...mass])
        }

        axiosRequest();
    }, []);

    return (
        <>
            <TitlePage text={"Список классов"} />
            <ListStudent type={"class"} list={list} link={"/subject/" + idSubject + "/"} />
        </>
    );
}

export default Subject;
