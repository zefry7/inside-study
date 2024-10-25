import React, { useState } from "react";
import "./style.scss"

function ItemProblem({ data, index }) {
    const [openWindow, setOpenWindow] = useState(0);


    const handleOpenSolution = () => {
        if(openWindow == 1) {
            setOpenWindow(0)
        } else {
            setOpenWindow(1)
        }
    }


    const handleOpenReason = () => {
        if(openWindow == 2) {
            setOpenWindow(0)
        } else {
            setOpenWindow(2)
        }
    }


    return (
        <div className="item-problem">
            <p className="item-problem__title">
                {index + 1}. {data.problem}
            </p>
            <div className="item-problem__row">
                <button className={"item-problem__button" + (openWindow == 1 ? " item-problem__button_active" : "")} onClick={(e) => handleOpenSolution()}>Решение</button>
                <button className={"item-problem__button" + (openWindow == 2 ? " item-problem__button_active" : "")} onClick={(e) => handleOpenReason()}>Причины</button>
            </div>
            {openWindow == 1 && <p className="item-problem__window">{data.solution}</p>}
            {openWindow == 2 && <p className="item-problem__window">{data.reason}</p>}
        </div>
    );
}


export default ItemProblem;