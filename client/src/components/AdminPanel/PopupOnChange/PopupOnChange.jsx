import React, { useState } from "react";
import "./popup.css";

const PopupOnChange = ({
  isOpen,
  buttonsData,
  setChangeButtons,
  onChangeValue,
  onChange,
}) => {
  const currentButtonID = buttonsData.find(
    (item) => item?.id === Number(onChangeValue)
  );

  const displayStyle = {
    display: isOpen ? "block" : "none",
  };

  const [paragraphs, setParagraphs] = useState({
    paragraph1: currentButtonID?.template?.paragraph1,
    paragraph2: currentButtonID?.template?.paragraph2,
    paragraph3: currentButtonID?.template?.paragraph3,
    paragraph4: currentButtonID?.template?.paragraph4,
    paragraph5: currentButtonID?.template?.paragraph5,
    paragraph6: currentButtonID?.template?.paragraph6,
    paragraph7: currentButtonID?.template?.paragraph7,
    paragraph8: currentButtonID?.template?.paragraph8,
    paragraph9: currentButtonID?.template?.paragraph9,
    paragraph10: currentButtonID?.template?.paragraph10,
    paragraph11: currentButtonID?.template?.paragraph11,
    paragraph12: currentButtonID?.template?.paragraph12,
    paragraph13: currentButtonID?.template?.paragraph13,
    paragraph14: currentButtonID?.template?.paragraph14,
    paragraph15: currentButtonID?.template?.paragraph15,
    paragraph16: currentButtonID?.template?.paragraph16,
    paragraph17: currentButtonID?.template?.paragraph17,
    paragraph18: currentButtonID?.template?.paragraph18,
    paragraph19: currentButtonID?.template?.paragraph19,
    paragraph20: currentButtonID?.template?.paragraph20,
    paragraph21: currentButtonID?.template?.paragraph21,
  });

  const [currentButtonTitle, setCurrentButtonTitle] = useState(
    currentButtonID?.title
  );

  const handleInputChange = (name, value) => {
    setParagraphs((prevParagraphs) => ({
      ...prevParagraphs,
      [name]: value,
    }));
  };

  const handleProgress = () => {
    let data = currentButtonID;
    data.template = paragraphs;
    data.title = currentButtonTitle;
    setChangeButtons(false);
    onChange(data);
  };

  const handleClose = () => {
    setChangeButtons(false);
  };

  return (
    <div className="popup" style={displayStyle}>
      <div className="popup-content">
        {currentButtonID ? (
          <div className="form-change">
            <h2>Названия кнопки</h2>
            <p>
              Инструкция:
              <br />
              <br />
              1. Что бы перенести на следующие строку пишите &lt;br/&gt; ИМЕННО
              ТАК КАК ПОКАЗАНО!!!
              <br />
              <br />
              2.Если вы не ввели нечего в поля НЕ СОХРАНЯЙТЕ просто нажмите
              отменить
            </p>
            <br />
            <input
              type="text"
              className="change-button__name"
              value={currentButtonTitle}
              onChange={(e) => setCurrentButtonTitle(e.target.value)}
            />
            <h3>Текста страницы</h3>
            {Object.keys(paragraphs).map((name) => (
              <input
                key={name}
                type="text"
                value={paragraphs[name]}
                onChange={(e) => handleInputChange(name, e.target.value)}
              />
            ))}
          </div>
        ) : (
          "Элемент не найден по указаному ID"
        )}
        <button className="close-button" onClick={handleProgress}>
          Сохранить и изминить
        </button>
        <button className="close-button" onClick={handleClose}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default PopupOnChange;
