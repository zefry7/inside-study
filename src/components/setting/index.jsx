import React, { useState } from "react";
import "./style.scss";

const shema = {
    subject: [],
    role: [],
    user: [],
};

function Setting() {
    const [data, setData] = useState(shema);

    const handleSubject = (e) => {
        e.preventDefault();

        setData({ ...data, subject: [...data.subject, e.target[0].value] });

        e.target[0].value = "";
    };

    const handleDeleteSubject = (index) => {
        setData({ ...data, subject: data.subject.filter((_, i) => i != index) });
    };

    const handleRole = (e) => {
        e.preventDefault();

        setData({ ...data, role: [...data.role, e.target[0].value] });

        e.target[0].value = "";
    };

    const handleDeleteRole = (index) => {
        setData({ ...data, role: data.role.filter((_, i) => i != index) });
    };

    const handleUser = (e) => {
        e.preventDefault();

        if (e.target[0].value != "" && e.target[1].value != "" && e.target[2].value != "") {
            const obj = {
                fio: e.target[0].value,
                email: e.target[1].value,
                role: e.target[2].value,
            };

            console.log(obj);

            setData({ ...data, user: [...data.user, obj] });

            e.target[0].value = "";
            e.target[1].value = "";
        }
    };

    const handleDeleteUser = (index) => {
        setData({ ...data, user: data.user.filter((_, i) => i != index) });
    };

    return (
        <div className="setting">
            <div className="setting__section">
                <h2 className="setting__title">Дисциплины</h2>
                <div className="setting__row">
                    <form action="" id="subject" onSubmit={(e) => handleSubject(e)}>
                        <label className="setting__text">
                            Название: <input type="text" className="setting__input" />
                        </label>
                    </form>
                    <button className="setting__button-add" type="submit" form="subject">
                        +
                    </button>
                </div>
                <div className="setting__list">
                    {data.subject.map((v, i) => (
                        <div className="setting__item" key={i}>
                            <p className="setting__item-text">{v}</p>
                            <div className="setting__item-edit">
                                <img src="/img/edit.svg" alt="" />
                            </div>
                            <div className="setting__item-edit" onClick={() => handleDeleteSubject(i)}>
                                <img src="/img/delete.svg" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="setting__section">
                <h2 className="setting__title">Роли</h2>
                <div className="setting__row">
                    <form action="" id="role" onSubmit={(e) => handleRole(e)}>
                        <label className="setting__text">
                            Название: <input type="text" className="setting__input" />
                        </label>
                    </form>
                    <button className="setting__button-add" type="submit" form="role">
                        +
                    </button>
                </div>
                <div className="setting__list">
                    {data.role.map((v, i) => (
                        <div className="setting__item" key={i}>
                            <p className="setting__item-text">{v}</p>
                            <div className="setting__item-edit">
                                <img src="/img/edit.svg" alt="" />
                            </div>
                            <div className="setting__item-edit" onClick={() => handleDeleteRole(i)}>
                                <img src="/img/delete.svg" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="setting__section">
                <h2 className="setting__title">Пользователи</h2>
                <div className="setting__row">
                    <form action="" id="user" onSubmit={(e) => handleUser(e)}>
                        <label className="setting__text">
                            ФИО: <input type="text" className="setting__input" />
                        </label>
                        <label className="setting__text">
                            Почта: <input type="text" className="setting__input" />
                        </label>
                        <label className="setting__text">
                            Роль:{" "}
                            <select type="text" className="setting__input">
                                {data?.role?.length != 0 ? (
                                    data.role.map((v) => <option value={v}>{v}</option>)
                                ) : (
                                    <option value={"Пусто"} disabled>
                                        Пусто
                                    </option>
                                )}
                            </select>
                        </label>
                    </form>
                    <button className="setting__button-add" type="submit" form="user">
                        +
                    </button>
                </div>
                <div className="setting__list">
                    {data.user.map((v, i) => (
                        <div className="setting__item" key={i}>
                            <div className="setting__item-row">
                                <p className="setting__item-text">{v.fio}</p>
                                <p className="setting__item-text">{v.email}</p>
                                <p className="setting__item-text">{v.role}</p>
                            </div>
                            <div className="setting__item-edit">
                                <img src="/img/edit.svg" alt="" />
                            </div>
                            <div className="setting__item-edit" onClick={() => handleDeleteUser(i)}>
                                <img src="/img/delete.svg" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Setting;
