import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0f67b1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0e5b9e;
  }
`;

const Profile = ({ username, setUserData }) => {
  const [inputs, setInputs] = useState({
    birthdate: "",
    age: "",
    affiliation: "",
    job: "",
    favoriteFood: "",
    dislikedFood: "",
    favoriteSong: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitBtn = useCallback(() => {
    setUserData(inputs);
    alert(`프로필이 저장되었습니다!`);
    navigate("/mypage");
  }, [inputs, navigate, setUserData]);

  return (
    <Container>
      <ProfileImage
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Profile"
      />
      <Title>{username}'s Profile</Title>
      <Input
        type="date"
        name="birthdate"
        placeholder="Birthdate"
        value={inputs.birthdate}
        onChange={onChange}
      />
      <Input
        type="number"
        name="age"
        placeholder="Age"
        value={inputs.age}
        onChange={onChange}
      />
      <Input
        type="text"
        name="affiliation"
        placeholder="Affiliation"
        value={inputs.affiliation}
        onChange={onChange}
      />
      <Input
        type="text"
        name="job"
        placeholder="Job"
        value={inputs.job}
        onChange={onChange}
      />
      <Input
        type="text"
        name="favoriteFood"
        placeholder="Favorite Food"
        value={inputs.favoriteFood}
        onChange={onChange}
      />
      <Input
        type="text"
        name="dislikedFood"
        placeholder="Disliked Food"
        value={inputs.dislikedFood}
        onChange={onChange}
      />
      <Input
        type="text"
        name="favoriteSong"
        placeholder="Favorite Song"
        value={inputs.favoriteSong}
        onChange={onChange}
      />
      <Button onClick={submitBtn}>Submit</Button>
    </Container>
  );
};

export default Profile;
