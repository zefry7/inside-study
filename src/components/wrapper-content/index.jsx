import React from "react";
import "./style.scss"

function WrapperContent({ children }) {

    return <div className="wrapper-content">
        {children}
    </div>
}

export default WrapperContent;