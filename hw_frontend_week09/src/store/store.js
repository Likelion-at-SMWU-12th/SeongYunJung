import { create } from "zustand";
import moviesDummy from "../dummy/dummy.json";

const useMovieStore = create((set) => ({
  movies: moviesDummy,
  interestMovies: [],
  addInterest: (movie) =>
    set((state) => {
      // 이미 존재하는 영화의 id값과 같은 id값이면 그냥 state를 반환, 다르면 새로운 배열 반환 -- 똑같은 영화가 관심설정목록에 중복 표시되는 것을 막기 위함
      if (!state.interestMovies.some((already) => already.id === movie.id)) {
        return { interestMovies: [...state.interestMovies, movie] };
      }
      return state;
    }),

  removeInterest: (id) =>
    set((state) => ({
      // id가 같은 영화만 제외한 나머지 영화들을 포함한 새로운 배열을 반환 -- 삭제 루트
      interestMovies: state.interestMovies.filter((movie) => movie.id !== id),
    })),

  toggleMovie: (id) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id ? { ...movie, interested: !movie.interested } : movie
      ),
    })),
}));

export default useMovieStore;
