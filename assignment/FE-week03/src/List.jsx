import React from "react";
import styled from "styled-components";

const StyledListBox = styled.div`
  border: 1.5px solid #cfcfcf;
  margin: 6px 30px 0px 6px;
  width: 743px;
  height: 320px;
`;

const StyledList = styled.div`
  margin: 40px 20px;
  font-size: 14px;
`;

const StyledEm = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: #cfcfcf;
  margin: 10px 0px;
`;

const StyledOrder = styled.p`
  text-align: center;
`;

const List = () => {
  return (
    <div>
      <StyledListBox>
        <StyledList>
          <StyledEm>📋나의 기록📋</StyledEm>
          <hr />
          안녕하쇼- (4)
          <StyledHr />
          게시판 글 제목 (6)
          <StyledHr />
          리액트 어려워요.. (7)
          <StyledHr />
          견뎌 (2)
          <StyledHr />
          <br />
          <StyledOrder>1&nbsp; | &nbsp;2&nbsp; | &nbsp;3</StyledOrder>
        </StyledList>
      </StyledListBox>
    </div>
  );
};

export default List;
