import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function SubjectFilter({ setSubjectSelect }) {
    const [active, setActive] = useState(false);
    const [list, setList] = useState([]);
    const [value, setValue] = useState("Предмет")

    useEffect(() => {
        async function axiosRequest() {
            const response = await axios({
                method: "GET",
                url: "http://localhost:80/api/all_disciplines",
            });
            const data = await response.data;

            const mass = data.map((v) => ({ id: v.id, title: v.title }));

            setList([...mass]);
        }

        axiosRequest();
    }, []);

    return (
        <div className={"subject-filter" + (active == true ? " subject-filter_active" : "")}>
            <p className="subject-filter__button" onClick={() => setActive((v) => !v)}>
                {value}
            </p>
            <div className="subject-filter__list">
                {list?.map((v, i) => (
                    <p
                        className="subject-filter__item"
                        onClick={() => {
                            setSubjectSelect(v.id);
                            setValue(v.title)
                            setActive((v) => !v);
                        }}
                    >
                        {v.title}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default SubjectFilter;
