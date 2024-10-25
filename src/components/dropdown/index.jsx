import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Dropdown({ textButton }) {
    const [active, setActive] = useState(false)


    const handleClick = () => {
        setActive(v => !v)
    }

    return (
        <div className={"dropdown" + (active == true ? " dropdown_active" : "")}>
            <button className="dropdown__button button-style" onClick={() => handleClick()}>{textButton}</button>
            <div className="dropdown__list">
                <Link to={"/subject/123"} className="dropdown__item">Предмет 1</Link>
                <Link to={"/subject/123"} className="dropdown__item">Предмет 2</Link>
                <Link to={"/"} className="dropdown__item">Предмет 3</Link>
            </div>
        </div>
    );
}

export default Dropdown;
