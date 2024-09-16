import React from "react";
import MovieItem from "../components/MovieItem";
import styled from "styled-components";
import FavoriteIcon from "../img/favorite.svg";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Header>
          <Title>무비차트</Title>
          <Icon src={FavoriteIcon} onClick={() => navigate("/favorites")} />
        </Header>
        <MovieContainer>
          <MovieItem />
        </MovieContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 30px 90px;
`;

const Header = styled.div`
  display: flex;
  height: 70px;
  border-bottom: 3px solid #241d1e;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.header`
  font-size: 40px;
  font-weight: bolder;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 60px;
  height: 60px;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 20px;
`;

export default MovieList;
