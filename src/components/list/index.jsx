import React from "react";
import "./style.scss"

function List({list, itemCreate}) {

    return <div className="list">
        {list.map((v, i) => (
            itemCreate(v)
        ))}
    </div>
}

export default List;