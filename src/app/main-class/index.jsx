import React, { useEffect, useState } from "react";
import TitlePage from "../../components/title-page";
import ListStudent from "../../components/list-student";
import { useOutletContext } from "react-router";
import axios from "axios";

const nameClass = "6Б";

function MainClass() {
    const data = useOutletContext();
    const [list, setList] = useState([]);

    useEffect(() => {
        async function axiosRequest() {
            const url = "http://localhost:80/api/students/" + data?.own_group_id;
            const response = await axios({
                method: "GET",
                url: url,
            });

            console.log(response);

            const dataRes = await response.data;

            const result = dataRes.map((v, i) => ({ id: v.id, fullName: v.full_name }));

            console.log(result);

            setList([...result]);
        }

        axiosRequest();
    }, []);

    return (
        <>
            <TitlePage text={`Список учеников ${nameClass} класса`} />
            <ListStudent list={list} type={"main-class"} link={"/main-class/"} />
        </>
    );
}

export default MainClass;
