import React, { useState } from "react";
import "./style.scss";
import Dropdown from "../dropdown";

const nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентрябь", "Октябрь", "Ноябрь", "Декабрь"];

function DateFilter({ valueTo, setValueTo, valueFrom, setValueFrom }) {
    const handleChangeFrom = (e) => {
        if(e.target.value > valueTo) {
            setValueTo(e.target.value)
        }
        setValueFrom(e.target.value)
    }

    return (
        <div className="date-filter">
            <p className="date-filter__period">
                Период: c
                <select name="" id="" className="date-filter__select" value={valueFrom} onChange={(e) => handleChangeFrom(e)}>
                    {nameMonth.map((v, i) => (
                        <option value={i}>{v}</option>
                    ))}
                </select>
                по
                <select name="" id="" className="date-filter__select" value={valueTo} onChange={(e) => setValueTo(e.target.value)}>
                    {nameMonth.map((v, i) =>
                        valueFrom <= i ? (
                            <option value={i}>{v}</option>
                        ) : (
                            <option value={i} disabled>
                                {v}
                            </option>
                        )
                    )}
                </select>
            </p>
        </div>
    );
}

export default DateFilter;
