import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Dropdown() {
    const [active, setActive] = useState(false)


    const handleClick = () => {
        setActive(v => !v)
    }

    return (
        <div className={"dropdown" + (active == true ? " dropdown_active" : "")}>
            <button className="dropdown__button button-style" onClick={() => handleClick()}>Предметы</button>
            <div className="dropdown__list">
                <Link className="dropdown__item">Предмет 1</Link>
                <Link className="dropdown__item">Предмет 2</Link>
                <Link className="dropdown__item">Предмет 3</Link>
            </div>
        </div>
    );
}

export default Dropdown;
