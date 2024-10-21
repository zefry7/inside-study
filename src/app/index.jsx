import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Main from "./main";
import SingIn from "../components/sing-in";

function App() {
    const navigate = useNavigate();
    const [singIn, setSingIn] = useState(false);
    const [data, setData] = useState("");
    const [errorSingIn, setErrorSignIn] = useState(false)

    useEffect(() => {
        const store = sessionStorage.getItem("sing");
        if (store) {
            setSingIn(Boolean(store));
        }
    }, []);

    const handleSubmitSingIn = (e) => {
        e.preventDefault();
        setErrorSignIn(false)

        if (e.target.elements.login.value == "test" && e.target.elements.password.value == "test") {
            setSingIn(true);
        } else {
            setErrorSignIn(true)
        }
    };

    return <div>{singIn == true ? <Main /> : <SingIn submit={handleSubmitSingIn} error={errorSingIn} onError={setErrorSignIn}/>}</div>;
}

export default App;
