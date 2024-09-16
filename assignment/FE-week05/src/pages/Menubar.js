import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  margin: 40px;
  text-align: center;
  color: #0f67b1;
`;
const Menus = styled.div`
  width: 100%;
  background-color: #96c9f4;
  padding: 15px 0px;
  margin: 40px 0px;
  text-align: center;
`;

const Menu = styled(Link)`
  color: white;
  margin: 20px;
  text-decoration: none;

  &:hover {
    color: #faffaf;
    font-weight: bolder;
  }
`;

const Menubar = () => {
  return (
    <div>
      <Title>Write your profile!</Title>
      <Menus>
        <Menu to="/home">Home</Menu>
        <Menu to="/profile">Profile</Menu>
        <Menu to="/mypage">Mypage</Menu>
        <Menu to="/contact">Contact</Menu>
      </Menus>
      <Outlet />
    </div>
  );
};

export default Menubar;
