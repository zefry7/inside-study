import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Dropdown({ textButton, disciplines }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive((v) => !v);
    };

    return (
        <div className={"dropdown" + (active == true ? " dropdown_active" : "")}>
            <button className="dropdown__button button-style" onClick={() => handleClick()}>
                {textButton}
            </button>
            <div className="dropdown__list">
                {disciplines.map((subject, i) => (
                    <Link to={"/subject/" + subject?.id} className="dropdown__item" onClick={() => handleClick()} key={i}>
                        {subject?.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;
