import React, { useState } from "react";
import "./style.scss";
import ListMark from "../list-mark";


function ListStudySubject({ list }) {
    const [numberOpen, setNumberOpen] = useState(-1);

    const handleOpenMark = (i) => {
        if (i == numberOpen) {
            setNumberOpen(-1);
        } else {
            setNumberOpen(i);
        }
    };

    return (
        <div className="list-study-subj">
            {list?.map((v, i) => (
                <div className="list-study-subj__item" key={i}>
                    <div className="list-study-subj__item-wrapper">
                        <div className="list-study-subj__item-row">
                            <p className="list-study-subj__item-fio">{v.fullName}</p>
                            <p className={"list-study-subj__item-avg" + " list-study-subj__item-avg-" + Math.floor(v.avg)}>Средний балл: <span>{v.avg}</span></p>
                        </div>
                        <button className="list-study-subj__item-descr" onClick={() => handleOpenMark(i)}>
                            Подробное описание
                        </button>
                    </div>
                    {numberOpen == i && <ListMark marks={v.marks}/>}
                </div>
            ))}
        </div>
    );
}

export default ListStudySubject;
