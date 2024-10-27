import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import SingIn from "../components/sing-in";
import Wrapper from "../components/wrapper";
import WrapperContent from "../components/wrapper-content";
import NameUser from "../components/name-user";
import NavColumm from "../components/nav-column";
import Loading from "../components/loading";
import axios from "axios";

function App() {
    const navigate = useNavigate();
    const [singIn, setSingIn] = useState(false);
    const [data, setData] = useState("");
    const [errorSingIn, setErrorSignIn] = useState(false);
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const store = sessionStorage.getItem("sing");
        if (store) {
            setSingIn(Boolean(store));
        }

        if(singIn == false) {
            setSingIn(false)
        }
    }, []);


    //вход в систему - поулчение данных о пользователе.
    const handleSubmitSingIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorSignIn(false);

        if (e.target.elements.login.value == "test" && e.target.elements.password.value == "test") {
            const response = await axios({
                method: "GET",
                url: "http://localhost:80/api/teacher/e6a6b506-f8c6-44da-8bf2-cb5a110caeb3",
                headers: {
                    Accept: "application/json"
                },
            });
            const data = response.data

            if(data?.error != undefined) {
                setErrorSignIn(true);
            } else {
                setData(data);
                setLoading(false);
                setSingIn(true);
            }

        } else {
            setErrorSignIn(true);
        }
    };

    useEffect(() => {
    }, []);

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
                    <NameUser fioUser={data?.full_name}/>
                    <NavColumm disciplines={data?.disciplines} onExit={setSingIn}/>
                    <WrapperContent>{loading == true ? <Loading /> : <Outlet context={data}/>}</WrapperContent>
                </Wrapper>
            ) : (
                <SingIn submit={handleSubmitSingIn} error={errorSingIn} onError={setErrorSignIn} />
            )}
        </>
    );
}

export default App;
