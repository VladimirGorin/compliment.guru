import React from "react";
import "./popup.css";

const PopupOnDelete = ({ isOpen, buttonsData, setShowButtons }) => {
  const handleClose = () => {
    setShowButtons(false);
  };

  const displayStyle = {
    display: isOpen ? "flex" : "none",
  };

  const showButtons = buttonsData?.map((item) => (
    <button className="article-button__blue">
      {item?.title} id: {item?.id}
    </button>
  ));

  return (
    <div className="popup" style={displayStyle}>
      <div className="popup-content">
        {showButtons}
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupOnDelete;
