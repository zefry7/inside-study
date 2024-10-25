import React, { useEffect, useState } from "react";
import "./style.scss";

const year = new Date().getFullYear();
const weekRU = [6, 0, 1, 2, 3, 4, 5];
const nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентрябь", "Октябрь", "Ноябрь", "Декабрь"];
const renameMonth = ["января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентрябя", "Октября", "Ноября", "Декабря"];
const data = {
    "22.8.2024": true,
    "9.4.2024": false,
    "7.5.2024": true,
    "3.9.2024": false,
    "26.9.2024": true,
    "2.8.2024": false,
};

function CalendarVisit({ valueFrom, valueTo }) {
    const [allDay, setAllDay] = useState([]);
    const [infoItem, setInfoItem] = useState(null);

    useEffect(() => {
        const date = new Date("2024-01-01");
        const mass = [];

        for (let i = 0; i < 12; ++i) {
            if (valueFrom <= i && i <= valueTo) {
                let week = date.getDay();
                let month = new Array(weekRU[week]).fill({ value: "null" });

                while (date.getMonth() == i) {
                    let str = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

                    let full = date.getDate() + " " + renameMonth[date.getMonth()];

                    if (data[str] != undefined) {
                        if (data[str]) {
                            month.push({ value: "1", day: date.getDate(), full: full });
                        } else {
                            month.push({ value: "0", day: date.getDate(), full: full });
                        }
                    } else {
                        month.push({ value: "-", day: date.getDate(), full: full });
                    }

                    date.setDate(date.getDate() + 1);
                }

                mass.push(month);
            } else {
                date.setMonth(date.getMonth() + 1);
            }
        }

        console.log(mass);

        setAllDay(mass);
    }, [valueFrom, valueTo]);

    const handleViewInfo = (value) => {
        setInfoItem(value);
    };

    return (
        <div className="calendar-visit">
            <div className="calendar-visit__calendar">
                <h3 className="calendar-visit__year">{year} год</h3>
                <div className="calendar-visit__list">
                    {allDay.map((month, i) => (
                        <div className="calendar-visit__item" key={i}>
                            <h4 className="calendar-visit__item-month">{nameMonth[i + Number(valueFrom)] + " "}</h4>
                            <div className="calendar-visit__item-wrapper">
                                {month.map((day, j) =>
                                    day.value != "null" ? (
                                        day.value != "-" ? (
                                            <div
                                                className={
                                                    "calendar-visit__item-day" +
                                                    (day.value == "1"
                                                        ? " calendar-visit__item-day_visit"
                                                        : " calendar-visit__item-day_no-visit")
                                                }
                                                key={j}
                                            >
                                                {day.day}
                                            </div>
                                        ) : (
                                            <div className={"calendar-visit__item-day"} key={j} onClick={() => handleViewInfo(day)}>
                                                {day.day}
                                            </div>
                                        )
                                    ) : (
                                        <div className="calendar-visit__item-null" key={j}>
                                            {day.day}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="calendar-visit__info">
                {infoItem != null ? (
                    <>
                        <h3 className="calendar-visit__info-year">{infoItem?.full}</h3>
                        <div className="calendar-visit__info-list">
                            <div className="calendar-visit__info-item">
                                <p className="calendar-visit__info-subject">
                                    <span>1.</span> Рус. язык
                                </p>
                            </div>
                            <div className="calendar-visit__info-item calendar-visit__info-item_no-visit">
                                <p className="calendar-visit__info-subject">
                                    <span>3.</span> Рус. язык
                                </p>
                                <p className="calendar-visit__info-reason">
                                    <span>Причина: </span>
                                    Прогул
                                </p>
                            </div>
                            <div className="calendar-visit__info-item calendar-visit__info-item_sick">
                                <p className="calendar-visit__info-subject">
                                    <span>4.</span> Рус. язык
                                </p>
                                <p className="calendar-visit__info-reason">
                                    <span>Причина: </span>
                                    По болезни
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="calendar-visit__info-select">
                            Выберите день
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default CalendarVisit;
