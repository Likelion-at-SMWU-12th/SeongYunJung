import React from "react";
import { useLocale } from "../contexts/LocaleContext";

const LocaleSelect = () => {
  const { locale, setLocale } = useLocale();
  console.log("locale select 렌더링");
  return (
    <>
      <h1>언어 : {locale}</h1>
      <select onChange={(e) => setLocale(e.target.value)} value={locale}>
        <option value={"ko"}>한국어</option>
        <option value={"en"}>영어</option>
      </select>
    </>
  );
};

export default LocaleSelect;
