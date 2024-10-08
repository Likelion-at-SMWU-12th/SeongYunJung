import useMovieStore from "../store/store";
import styled from "styled-components";

function MovieItem() {
  const movies = useMovieStore((state) => state.movies);
  const toggleMovie = useMovieStore((state) => state.toggleMovie);
  const addInterest = useMovieStore((state) => state.addInterest);
  const removeInterest = useMovieStore((state) => state.removeInterest);

  const handleToggle = (movie) => {
    toggleMovie(movie.id);
    if (!movie.interested) {
      addInterest(movie);
      // eslint-disable-next-line
      alert(`영화 \"${movie.title}\"이(가) 관심설정이 되었습니다.`);
    } else {
      removeInterest(movie.id);
      // eslint-disable-next-line
      alert(`영화 \"${movie.title}\"이(가) 관심설정이 해제되었습니다.`);
    }
  };

  return (
    <>
      {movies?.map((movie) => (
        <MovieBox key={movie.id}>
          <img
            src={movie.poster}
            alt={movie.title}
            style={{ width: "200px" }}
          />
          <p style={{ fontWeight: "700", fontSize: "20px" }}>{movie.title}</p>
          <p style={{ fontSize: "14px" }}>{movie.releaseDate}</p>
          <InterestBtn onClick={() => handleToggle(movie)}>
            {movie.interested ? "관심 해제하기" : "관심 설정하기"}
          </InterestBtn>
        </MovieBox>
      ))}
    </>
  );
}

const MovieBox = styled.div`
  text-align: center;
  border-radius: 8px;
  border: 3px solid #ededed;
  margin: 0px 10px;
  padding: 15px 0px;
`;

const InterestBtn = styled.button`
  border: transparent;
  border-radius: 4px;
  font-weight: 700;
  padding: 8px 15px;
  background-color: #494949;
  color: #fff;
  cursor: pointer;
`;

export default MovieItem;
