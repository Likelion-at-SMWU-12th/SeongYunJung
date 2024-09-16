import React from "react";

const TextList = () => {
  const texts = ["Hello", "World", "React"];

  return (
    <div>
      <h1>Text List</h1>
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TextList;
