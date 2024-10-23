import React from "react";
import "./style.scss";

const data = [
    {
        mark: 5,
        theme: "*название темы*",
        date: "20.10.2024",
    },
    {
        mark: 4,
        theme: "*название темы*",
        date: "20.10.2024",
    },
    {
        mark: 3,
        theme: "*название темы*",
        date: "20.10.2024",
    },
    {
        mark: 2,
        theme: "*название темы*",
        date: "20.10.2024",
    },
];

function ListMark() {
    return (
        <div className="list-mark">
            {data.map((v, i) => (
                <div className="list-mark__item" key={i}>
                    <p className={"list-mark__text"} title={v.theme}>
                        <span className={`list-mark__type-${v.mark}`}>{v.mark}</span> - {v.theme}
                    </p>
                    <p className="list-mark__date">{v.date}</p>
                </div>
            ))}
        </div>
    );
}

export default ListMark;
