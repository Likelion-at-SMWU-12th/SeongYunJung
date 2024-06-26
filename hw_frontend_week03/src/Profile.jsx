import React from "react";
import styled from "styled-components";

const StyledProfileBox = styled.div`
  margin: 6px 6px 0px 30px;
  border: 1px solid #c0c0c0;
  padding: 5px;
  width: 170px;
  height: 340px;
`;

const StyledProfileImg = styled.img`
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  width: 170px;
`;

const StyledName = styled.p`
  margin-top: 25px;
  margin-left: 10px;
  margin-bottom: -8px;
  font-size: 14px;
  font-weight: bold;
`;

const StyledMajor = styled.p`
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: normal;
  color: #808080;
`;

const StyledEditBtn = styled.img`
  margin-left: 10px;
  margin-bottom: -5px;
  width: 20px;
`;

const Profile = () => {
  const yjInfo = {
    nickName: "ynzung",
    major: "IT-Engineering",
  };
  return (
    <div>
      <StyledProfileBox>
        <StyledProfileImg src={process.env.PUBLIC_URL + "/prof.jpg"} />
        <br />
        <StyledName>{yjInfo.nickName}</StyledName>
        <StyledMajor>{yjInfo.major}</StyledMajor>
        <StyledEditBtn src={process.env.PUBLIC_URL + "/edit.jpg"} />
        <br />
        <StyledMajor>프로필‣</StyledMajor>
        <StyledName>📝 글쓰기</StyledName>
      </StyledProfileBox>
    </div>
  );
};

export default Profile;
