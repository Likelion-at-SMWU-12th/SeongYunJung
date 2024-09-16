import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import Info from "./Info";
import MovieList from "./MovieList";

function App() {
  return (
    <>
      <Info />
      <Hello name="성윤정" color="blue" />
      <Counter />
      <MovieList />
    </>
  );
}

export default App;
