import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function ListStudent({ list, link, type }) {
    return (
        <div className="list-student">
            {list?.map((v, i) => (
                <div className="list-student__item" key={i}>
                    {type == "main-class" && <h3 className="list-student__title">{v}</h3>}
                    {type == "class" && (
                        <>
                            <h3 className="list-student__title">{v.nameClass + " класс"}</h3>
                            <p className="list-student__avg">Средний балл: {v.avg}</p>
                        </>
                    )}
                    <Link to={link} className="button-style">
                        Подробности
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ListStudent;
