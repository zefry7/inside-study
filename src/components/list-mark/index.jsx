import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

function ListMark({ marks }) {

    return (
        <div className="list-mark">
            {marks?.map((v, i) => (
                <div className="list-mark__item" key={i}>
                    <p className={"list-mark__text"} title={v.theme}>
                        <span className={`list-mark__type-${v.score}`}>{v.score}</span> - {v.theme}
                    </p>
                    <p className="list-mark__date">{v.date}</p>
                </div>
            ))}
        </div>
    );
}

export default ListMark;
