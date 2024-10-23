import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function ListStudent({ list }) {

    return (
        <div className="list-student">
            {list.map((v, i) => (
                <div className="list-student__item" key={i}>
                    <h3 className="list-student__fio">{v}</h3>
                    <Link to={"/main-class/214124"} className="button-style">
                        Подробности
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ListStudent;
