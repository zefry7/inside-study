import React from "react";
import "./style.scss"

function SingIn({ submit, error, onError }) {

    const handleChangeInput = (e) => {
        const str = e.target.value
        onError(false)
        if(str != "" && !str[str.length - 1].match(/[a-zA-Z0-9_-]/)) {
            e.target.value = str.slice(0, str.length - 1);
        }
    }

    return <div className="sing-in">
        <div className="sing-in__content">
            <h2 className="sing-in__title">Вход в систему</h2>
            <form action="" className="sing-in__form" id="formSingIn" onSubmit={(e) => submit(e)}>
                <input type="text" name="login" className="sing-in__input" placeholder="Логин" onChange={(e) => handleChangeInput(e)}/>  
                <input type="password" name="password" className="sing-in__input" placeholder="Пароль" onChange={(e) => handleChangeInput(e)}/>                  
            </form>
            {error == true && <p className="sing-in__error">*Неправильный логин или пароль</p>}
            <button className="sing-in__button" form="formSingIn" type="submit">Войти</button>
        </div>
    </div>
}

export default SingIn;