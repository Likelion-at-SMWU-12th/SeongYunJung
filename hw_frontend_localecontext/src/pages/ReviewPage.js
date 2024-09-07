import React from "react";
import ReviewList from "../components/ReviewList";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { localeStyle, themeStyle } from "../dict/dict";
import { useLocale } from "../contexts/LocaleContext";
import LocaleSelect from "../components/LocaleSelect";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { locale } = useLocale();

  return (
    <>
      <Wrapper
        bgColor={themeStyle[theme]["bgColor"]}
        textColor={themeStyle[theme]["textColor"]}
      >
        <h1>테마 : {theme}</h1>
        <LocaleSelect />
        <button onClick={() => navigate("/create")}>
          {localeStyle[locale]["writeBtn"]}
        </button>
        <ReviewList />
      </Wrapper>
    </>
  );
};

export default ReviewPage;

const Wrapper = styled.div`
  padding: 50px 100px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;
