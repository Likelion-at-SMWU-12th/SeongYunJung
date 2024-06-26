import React from "react";
import styled from "styled-components";

const StyledContentBox = styled.div`
  border: 1px solid #c0c0c0;
  margin: 6px 30px 0px 225px;
`;

const StyledH1 = styled.h1`
  color: #808080;
`;

const Content = () => {
  return (
    <div>
      <StyledContentBox>
        <StyledH1>제목</StyledH1>
      </StyledContentBox>
    </div>
  );
};

export default Content;
