import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";
import { usePart } from "../contexts/PartContext";

const Content = () => {
  const { part, clickPart } = usePart();
  return (
    <Wrapper>
      <div className="title">
        숙명여대 멋쟁이사자처럼 <span>{part}</span> 파트 구성원
      </div>
      <div className="content">
        <Left />
        <Right />
      </div>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 130px);
  .title {
    text-align: center;
    padding: 50px 0;
    font-size: 30px;
    font-weight: 700;
    span {
      color: #ee7521;
    }
  }
  .content {
    display: flex;
    height: 100%;
  }
`;
