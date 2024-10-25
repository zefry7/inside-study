import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown";

function NavColumn() {

    
    return (
        <div className="nav-column">
            <div className="nav-column__wrapper">
                <Link to={"/main-class"} className="button-style">
                    Класс
                </Link>
                <Dropdown textButton={"Предметы"}/>
                <Link to={"/setting"} className="button-style">
                    Настройки
                </Link>
            </div>
            <button className="button-style nav-column__exit">Выход</button>
        </div>
    );
}

export default NavColumn;
