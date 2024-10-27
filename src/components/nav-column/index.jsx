import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../dropdown";

function NavColumn({ disciplines, onExit }) {
    const navigate = useNavigate()
    
    const handleClickExit = () => {
        onExit(false)
        navigate("/")
    }

    return (
        <div className="nav-column">
            <div className="nav-column__wrapper">
                <Link to={"/main-class"} className="button-style">
                    Класс
                </Link>
                <Dropdown textButton={"Предметы"} disciplines={disciplines}/>
                <Link to={"/setting"} className="button-style">
                    Настройки
                </Link>
            </div>
            <button className="button-style nav-column__exit" onClick={() => handleClickExit()}>Выход</button>
        </div>
    );
}

export default NavColumn;
