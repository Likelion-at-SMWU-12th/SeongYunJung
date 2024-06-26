import React from "react";
import styled from "styled-components";

const StyledContentBox = styled.div`
  border: 1px solid #c0c0c0;
  margin: 6px 30px 0px 30px;
`;

const Content = () => {
  return (
    <div>
      <StyledContentBox></StyledContentBox>
    </div>
  );
};

export default Content;
