import React, { useState } from "react";
import "./style.scss";

function SubjectFilter() {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState("Предмет")

    return <div className={"subject-filter" + (active == true ? " subject-filter_active" : "")}>
        <p className="subject-filter__button" onClick={() => setActive((v) => !v)}>
            {value}
        </p>
        <div className="subject-filter__list">
            <p className="subject-filter__item" onClick={() => {setValue("Предмет 1"); setActive((v) => !v)}}>
                Предмет 1
            </p>
            <p className="subject-filter__item" onClick={() => {setValue("Предмет 2"); setActive((v) => !v)}}>
                Предмет 2
            </p>
            <p className="subject-filter__item" onClick={() => {setValue("Предмет 3"); setActive((v) => !v)}}>
                Предмет 3
            </p>
            <p className="subject-filter__item" onClick={() => {setValue("Предмет 4"); setActive((v) => !v)}}>
                Предмет 4
            </p>
        </div>
    </div>
}

export default SubjectFilter;