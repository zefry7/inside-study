import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import SingIn from "../components/sing-in";
import Wrapper from "../components/wrapper";
import WrapperContent from "../components/wrapper-content";
import NameUser from "../components/name-user";
import NavColumm from "../components/nav-column";

function App() {
    const navigate = useNavigate();
    const [singIn, setSingIn] = useState(true);
    const [data, setData] = useState("");
    const [errorSingIn, setErrorSignIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const store = sessionStorage.getItem("sing");
        if (store) {
            setSingIn(Boolean(store));
        }
        if(singIn == false) {
            navigate("/")
        }
    }, []);

    const handleSubmitSingIn = (e) => {
        e.preventDefault();
        setErrorSignIn(false);

        if (e.target.elements.login.value == "test" && e.target.elements.password.value == "test") {
            setSingIn(true);
        } else {
            setErrorSignIn(true);
        }
    };

    useEffect(() => {
        if (singIn == true) {
            document.getElementsByClassName("wrapper-content")[0].scrollTo({
                top: 0,
            });
        }
    }, [location]);

    return (
        <>
            {singIn == true ? (
                <Wrapper>
                    <NameUser />
                    <NavColumm />
                    <WrapperContent>
                        <Outlet />
                    </WrapperContent>
                </Wrapper>
            ) : (
                <SingIn submit={handleSubmitSingIn} error={errorSingIn} onError={setErrorSignIn} />
            )}
        </>
    );
}

export default App;
