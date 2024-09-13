import "./App.css";
import FavoriteMovie from "./pages/FavoriteMovie";
import MovieList from "./pages/MovieList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/favorites" element={<FavoriteMovie />}></Route>
      </Routes>
    </>
  );
}

export default App;
