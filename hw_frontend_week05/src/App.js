import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Menubar from "./pages/Menubar";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Menubar />}>
          <Route path="/home" element={<Home setUsername={setUsername} />} />
          <Route
            path="/profile"
            element={<Profile username={username} setUserData={setUserData} />}
          />
          <Route
            path="/mypage"
            element={<Mypage username={username} userData={userData} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
