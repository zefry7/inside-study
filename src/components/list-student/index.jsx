import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function ListStudent({ list, type, link }) {
    return (
        <div className="list-student">
            {list?.map((v, i) => (
                <div className="list-student__item" key={i}>
                    {type == "main-class" && (
                        <>
                            <h3 className="list-student__title">{v.fullName}</h3>
                            <Link to={link + v.id} className="button-style">
                                Подробнee
                            </Link>
                        </>
                    )}
                    {type == "class" && (
                        <>
                            <h3 className="list-student__title">{v.nameClass + " класс"}</h3>
                            <p className={"list-student__avg" + " list-student__avg-" + Math.floor(v.avgClass)}>
                                Средний балл: <span>{v.avgClass}</span>
                            </p>
                            <Link to={link + v.idClass} className="button-style">
                                Подробнee
                            </Link>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ListStudent;
