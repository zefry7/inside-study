import React, { useState } from "react";
import "./style.scss";
import Dropdown from "../dropdown";

const nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентрябь", "Октябрь", "Ноябрь", "Декабрь"];

function RowFilter({ valueTo, setValueTo, valueFrom, setValueFrom }) {
    const handleChangeFrom = (e) => {
        if(e.target.value > valueTo) {
            setValueTo(e.target.value)
        }
        setValueFrom(e.target.value)
    }

    return (
        <div className="row-filter">
            <Dropdown textButton={"Предмет"} />
            <div className="row-filter__period">
                <select name="" id="" className="row-filter__period-from" value={valueFrom} onChange={(e) => handleChangeFrom(e)}>
                    {nameMonth.map((v, i) => (
                        <option value={i}>{v}</option>
                    ))}
                </select>
                <select name="" id="" className="row-filter__period-to" value={valueTo} onChange={(e) => setValueTo(e.target.value)}>
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
            </div>
        </div>
    );
}

export default RowFilter;
