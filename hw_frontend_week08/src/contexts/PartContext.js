import { createContext, useContext, useState } from "react";

const PartContext = createContext();

export const PartProvider = ({ children }) => {
  const [part, setPart] = useState("");

  const clickPart = (clickedPart) => {
    setPart((prevPart) => (prevPart === clickedPart ? prevPart : clickedPart));
    console.log("파트 변경: ", clickedPart);
  };

  return (
    <PartContext.Provider value={{ part, clickPart }}>
      {children}
    </PartContext.Provider>
  );
};

export const usePart = () => useContext(PartContext);
