import React from "react";
import styled from "styled-components";

const StyledContentBox = styled.div`
  border: 1.5px solid #cfcfcf;
  margin: -20px 30px 0px 225px;
  padding: 15px 40px;
`;

const StyledH2 = styled.h2`
  color: blacks;
  font-weight: normal;
`;

const StyledInfo = styled.div`
  display: flex;
  height: 40px;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const StyledProfileImg = styled.img`
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 40px;
`;

const StyledName = styled.p`
  font-weight: light;
  margin-left: 8px;
  margin-top: 10px;
  font-size: 15px;
`;
const StyledDate = styled.p`
  color: #c0c0c0;
  font-weight: light;
  margin-left: 8px;
  margin-top: 10px;
  font
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: #cfcfcf;
  margin: 10px 0px;
`;

const StyledPost = styled.p`
  text-align: left;
  font-size: 12px;
  line-height: 1.5;
  margin-left: 30px;
  margin-top: 30px;
`;

const StyledPostImg = styled.img`
  width: 600px;
  margin: 10px 30px;
  justify-content: center;
`;
const Content = () => {
  return (
    <div>
      <StyledContentBox>
        <StyledH2>리액트 어려워요..</StyledH2>
        <StyledInfo>
          <StyledProfileImg src={process.env.PUBLIC_URL + "/prof.jpg"} />
          <StyledName>ynzung</StyledName>
          <StyledDate>2024. 6. 26. 23:24</StyledDate>
        </StyledInfo>
        <StyledHr />
        <StyledPost>
          리액트 처음 배우는데요
          <br />
          뭔가 어려운데
          <br />
          또 나름 재밌기도 하고 ~~
          <br />
          이렇게 하는게 맞는지는 모르겠지만
          <br />
          일단 열심히 해봐쓰요...
          <br />
          <br />
          늘 디자인적 독창성은 떨어지는 거 같지만,,,,,
          <br />
          열정만큼은 10000000000000000이랍니다
          <br />
          그래도 이번 과제하면서 어떤 걸 어디서 어떻게 쓰는지 조큼은 이해한 것
          같은 늑낌..입니다.
          <br />
          <br />
          리액트 정복 기원 정권찌르기 1일차
        </StyledPost>
        <StyledPostImg src={process.env.PUBLIC_URL + "/image3.jpg"} />
        <StyledPostImg src={process.env.PUBLIC_URL + "/image4.jpg"} />
      </StyledContentBox>
    </div>
  );
};

export default Content;
