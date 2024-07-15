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

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #0f67b1;
  margin-bottom: 10px;
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #0f67b1;
  margin-bottom: 10px;
`;

const Content = styled.p`
  margin: 10px 0;
`;

const List = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
`;

const Detail = styled.li`
  margin-bottom: 5px;
`;

const Mypage = ({ username, userData }) => {
  if (!userData) {
    return (
      <Container>
        <Content>저장된 사용자의 데이터가 없습니다</Content>
      </Container>
    );
  }

  const {
    birthdate,
    age,
    affiliation,
    job,
    favoriteFood,
    dislikedFood,
    favoriteSong,
  } = userData;

  return (
    <Container>
      <Profile>
        <ProfileImage
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Profile"
        />
        <Title>{username}'s Page</Title>
      </Profile>
      <Section>
        <SectionTitle>My Profile</SectionTitle>
        <hr />
        <Content>
          <strong>Affiliation: {affiliation}</strong>
        </Content>
        <List>
          <Detail>Birthdate: {birthdate}</Detail>
          <Detail>Age: {age}</Detail>
          <Detail>Job: {job}</Detail>
        </List>
      </Section>
      <Section>
        <SectionTitle>My Favorites</SectionTitle>
        <hr />
        <Content>Favorite Food: {favoriteFood}</Content>
        <Content>Disliked Food: {dislikedFood}</Content>
        <Content>Favorite Song: {favoriteSong}</Content>
      </Section>
    </Container>
  );
};

export default Mypage;
