import { Route, Routes } from "react-router";
import ReviewPage from "./pages/ReviewPage";
import CreatePage from "./pages/CreatePage";
import ToggleBtn from "./components/ToggleBtn";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<ReviewPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
        <ToggleBtn />
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
