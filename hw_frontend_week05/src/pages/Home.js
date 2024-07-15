import React, { useState, useRef } from "react";
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

const Title = styled.h2`
  margin-bottom: 20px;
  color: #0f67b1;
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

const Home = ({ setUsername }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const usernameInput = useRef();

  const { username, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLogin = () => {
    setUsername(username);
    alert(`${username}님 안녕하세요!`);
    navigate("/profile");
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
        ref={usernameInput}
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onChange}
      />
      <Button onClick={onLogin}>Login</Button>
    </Container>
  );
};

export default Home;
