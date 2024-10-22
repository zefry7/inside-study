import React from "react";
import "./style.scss"

function Welcome() {

    return <div className="welcome">
        <div className="welcome__img">
            <img src="/img/brain.svg" alt="" />
        </div>
        <h2 className="welcome__title">Добро пожаловать!</h2>
    </div>
}

export default Welcome;