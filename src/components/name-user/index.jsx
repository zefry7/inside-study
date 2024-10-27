import React from "react";
import "./style.scss"

function NameUser({ fioUser }) {

    return <div className="name-user">
        <p className="name-user__text">{fioUser}</p>
    </div>
}

export default NameUser;