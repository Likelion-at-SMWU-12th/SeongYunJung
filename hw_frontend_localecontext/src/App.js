import { Route, Routes } from "react-router";
import ReviewPage from "./pages/ReviewPage";
import CreatePage from "./pages/CreatePage";
import ToggleBtn from "./components/ToggleBtn";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContext.Provider value={"light"}>
        <Routes>
          <Route path="/" element={<ReviewPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
        <ToggleBtn />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
