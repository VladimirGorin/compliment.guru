import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./adminPanel.css";
import PopupOnDelete from "./PopupOnDelete/PopupOnDelete";
import PopupOnChange from "./PopupOnChange/PopupOnChange";
import Cookies from "js-cookie";

export default function AdminPanel({
  buttonsData,
  setNewButton,
  deleteButton,
  setNewData,
  checkAdmin,
}) {
  const [isAdmin, setIsAdmin] = useState(Cookies.get("isAuth"));

  const [successful, setSuccessful] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const [changeButtons, setChangeButtons] = useState(false);

  const [onAddValue, setOnAddValue] = useState();
  const [onDeletedValue, setOnDeletedValue] = useState();
  const [onChangeValue, setOnChange] = useState();

  const onAddInputRef = React.createRef();
  const onChangeInputRef = React.createRef();
  const onDeletedInputRef = React.createRef();

  const onAddChanged = () => {
    setOnAddValue(onAddInputRef.current.value);
  };

  const onChangeChanged = () => {
    setOnChange(onChangeInputRef.current.value);
  };

  const onDeletedChanged = () => {
    setOnDeletedValue(onDeletedInputRef.current.value);
  };

  const handleClick = async () => {
    const getLogin = prompt("Введите логин: ");
    const getPassword = prompt("Введите пароль: ");

    const adminUser = {
      login: getLogin,
      password: getPassword,
    };

    const status = await checkAdmin(adminUser);

    if (status !== 200) {
      return <Navigate to="/article/" />;
    } else {
      Cookies.set("isAuth", true, { expires: 7 });
      setIsAdmin(true);
    }
  };

  const onAdd = () => {
    setNewButton({ title: onAddValue });

    setSuccessful(true);
    setTimeout(() => {
      setSuccessful(null);
    }, 4000);
  };

  const onChange = (data) => {
    setNewData(data);
    setSuccessful(true);
    setTimeout(() => {
      setSuccessful(null);
    }, 4000);
  };

  const onDeleted = () => {
    if (buttonsData.find((item) => item.id === Number(onDeletedValue))) {
      deleteButton(onDeletedValue);
      setSuccessful(true);
      setTimeout(() => {
        setSuccessful(null);
      }, 4000);
    } else {
      alert("Кнопка по указаному айди не найдена");
    }
  };

  if (!isAdmin) {
    return (
      <button className="telegram-style__blue" onClick={handleClick}>
        Пройти проверку
      </button>
    );
  }

  return (
    <div className="admin-panel">
      <div className="section sec1">
        <h2>Добавить новую кнопку</h2>
        <input
          className="new-button__input"
          type="text"
          value={onAddValue}
          onChange={onAddChanged}
          ref={onAddInputRef}
          placeholder="Введите названия кнопки"
        />
        <button className="new-button__input" onClick={onAdd}>
          Добавить
        </button>
        {successful ? <span className="button-caption">Успех!</span> : ""}
      </div>
      <div className="section sec2">
        <h2>Удалить кнопку</h2>

        <input
          className="new-button__input"
          type="number"
          value={onDeletedValue}
          onChange={onDeletedChanged}
          ref={onDeletedInputRef}
          placeholder="Введите id кнопки"
        />
        <button className="new-button__input" onClick={onDeleted}>
          Удалить
        </button>
        <button
          className="new-button__input"
          onClick={() => {
            setShowButtons(true);
          }}
        >
          Показать все кнопки
        </button>

        <PopupOnDelete
          isOpen={showButtons}
          buttonsData={buttonsData}
          setShowButtons={setShowButtons}
        />

        {successful ? <span className="button-caption">Успех!</span> : ""}
      </div>
      <div className="section sec3">
        <h2>Изминить страницу</h2>
        <input
          className="new-button__input"
          type="number"
          min={0}
          value={onChangeValue}
          onChange={onChangeChanged}
          ref={onChangeInputRef}
          placeholder="Введите id кнопки"
        />
        <button
          className="new-button__input"
          onClick={() => {
            setChangeButtons(true);
          }}
        >
          Изминить
        </button>
        {changeButtons ? (
          <PopupOnChange
            isOpen={changeButtons}
            buttonsData={buttonsData}
            setChangeButtons={setChangeButtons}
            onChangeValue={onChangeValue}
            onChange={onChange}
          />
        ) : (
          ""
        )}

        {successful ? <span className="button-caption">Успех!</span> : ""}
      </div>
      <Link to="/article/">Вернутся на article</Link>
    </div>
  );
}
