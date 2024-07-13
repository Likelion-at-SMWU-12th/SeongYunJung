import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #0f67b1;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    color: #0f67b1;
    font-weight: bolder;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contact Me</Title>
      <ProfileImage
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="profile"
      />
      <Content>
        <Icon src={`${process.env.PUBLIC_URL}/mail-icon.png`} alt="mail" />
        <StyledLink
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=syj91105@sookmyung.ac.kr"
          target="_blank"
        >
          syj91105@sookmyung.ac.kr
        </StyledLink>
      </Content>
      <Content>
        <Icon
          src={`${process.env.PUBLIC_URL}/instagram-icon.svg`}
          alt="instagram"
        />
        <StyledLink href="https://www.instagram.com/ynzung" target="_blank">
          @ynzung
        </StyledLink>
      </Content>
      <Content>
        <Icon src={`${process.env.PUBLIC_URL}/github-icon.png`} alt="gitHub" />
        <StyledLink href="https://github.com/ynzung" target="_blank">
          github.com/ynzung
        </StyledLink>
      </Content>
      <Content>
        <Icon src={`${process.env.PUBLIC_URL}/blog-icon.svg`} alt="blog" />
        <StyledLink href="https://blog.naver.com/dbswjdd1" target="_blank">
          https://blog.naver.com/dbswjdd1
        </StyledLink>
      </Content>
    </Container>
  );
};

export default Contact;
