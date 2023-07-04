import React from 'react';

const TriggerComponent = ({ text }) => {
  const getHtmlBlock = () => {
    if (text?.includes('<br/>')) {
      const parts = text.split('<br/>');
      return (
        <div>
          {parts.map((word, index) => (
            <React.Fragment key={index}>
              {word}
              {index !== parts.length - 1 && <br/>}
            </React.Fragment>
          ))}
        </div>
      );
    }
    return <div>{text}</div>;
  };

  return <>{getHtmlBlock()}</>;
};

export default TriggerComponent;
