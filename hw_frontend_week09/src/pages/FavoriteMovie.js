import React from "react";
import styled from "styled-components";
import FavoriteItem from "../components/FavoriteItem";
import useMovieStore from "../store/store";

const FavoriteMovie = () => {
  const interestMovies = useMovieStore((state) => state.interestMovies);

  return (
    <Container>
      <Header>관심 영화 목록 ({interestMovies.length})</Header>
      <MovieContainer>
        <FavoriteItem />
      </MovieContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 90px;
`;

const Header = styled.div`
  height: 60px;
  border-bottom: 3px solid #241d1e;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bolder;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 20px;
`;

export default FavoriteMovie;
