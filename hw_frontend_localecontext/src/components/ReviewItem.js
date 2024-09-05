import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { localeStyle, themeStyle } from "../dict/dict";
import { useLocale } from "../contexts/LocaleContext";

const MovieItem = ({ title, comment, img }) => {
  const { theme } = useTheme();
  const { locale } = useLocale();
  return (
    <ReviewDiv borderColor={themeStyle[theme]["borderColor"]}>
      <img src={img} alt="movieimg" />
      <div>
        <div className="title">{title || "제목"}</div>
        <div className="comment">{comment || "리뷰"}</div>
        <div style={{ display: "flex" }} className="btnline">
          <button>{localeStyle[locale]["editBtn"]}</button>
          <button>{localeStyle[locale]["deleteBtn"]}</button>
        </div>
      </div>
    </ReviewDiv>
  );
};

export default MovieItem;

const ReviewDiv = styled.div`
  display: flex;
  padding: 30px;
  border: ${(props) => props.borderColor};
  border-radius: 20px;
  gap: 0 20px;
  position: relative;
  margin-bottom: 30px;
  img {
    height: 200px;
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .comment {
    font-size: 15px;
  }
  .btnline {
    position: absolute;
    right: 30px;
    bottom: 30px;
    gap: 0 10px;
  }
`;
