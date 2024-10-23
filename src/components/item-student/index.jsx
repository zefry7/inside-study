import React from "react";
import "./style.scss"
import { Link } from "react-router-dom";

function ItemStudent({fio}) {

    return <div className="item-student">
        <h3 className="item-student__fio">{fio}</h3>
        <Link className="button-style">Подробности</Link>
    </div>
}

export default ItemStudent;