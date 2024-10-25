import React from "react";
import "./style.scss"


const sortName = ["По алфавиту", "По убыванию", "По возрастанию"]

function OrderFilter({ sortFilter, setSortFilter}) {


    return (
        <div className="order-filter">
            <p className="order-filter__text">
                Период: c
                <select name="" id="" className="order-filter__select" value={sortFilter} onChange={(e) => setSortFilter(e.target.value)}>
                    {sortName.map((v, i) => (
                        <option value={v}>{v}</option>
                    ))}
                </select>
            </p>
        </div>
    );
}


export default OrderFilter;