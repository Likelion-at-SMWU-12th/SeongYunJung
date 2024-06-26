import React from "react";
import styled from "styled-components";

const StyledWriteBox = styled.div`
  border: 1px solid #c0c0c0;
  margin: 6px 30px 0px 225px;
  padding: 40px 60px;
  height: 200px;
`;

const StyledTitle = styled.textarea`
  color: #808080;
  font-weight: normal;
  font-size: 26px;
  border: none;
  resize: none;
  height: 50px;
  &::placeholder {
    font-size: 1.2em;
  }
  &:focus {
    outline: none;
  }
`;

const StyledDetail = styled.textarea`
  margin-top: 10px;
  font-size: 15px;
  border: none;
  resize: none;
  height: 50px;
  &:focus {
    outline: none;
  }
`;

const Write = () => {
  return (
    <div>
      <StyledWriteBox>
        <StyledTitle placeholder="제목"></StyledTitle>
        <hr />
        <StyledDetail placeholder="내용을 입력하세요."></StyledDetail>
      </StyledWriteBox>
    </div>
  );
};

export default Write;
