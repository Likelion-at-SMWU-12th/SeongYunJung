import "./App.css";
import React, { useState } from "react";
import Profile from "./Profile";
import List from "./List";
import Content from "./Content";
import Write from "./Write";
import styled from "styled-components";

const StyleEdge = styled.div`
  background: #ebebeb;
  min-height: 100vh;
`;
const StyledMain = styled.div`
  width: 1000px;
  padding: 40px 48px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  min-height: 100vh;
`;

const StyledWelcome = styled.h3`
  background-color: #cfcfcf;
  padding: 10px 10px;
  margin: 0px 30px 5px 30px;
`;

const StyledContent = styled.div`
  display: flex;
`;

function App() {
  let [showWrite, setShowWrite] = useState(false);

  return (
    <div>
      <StyleEdge>
        <StyledMain>
          <StyledWelcome>Welcome to Yunjung's Board</StyledWelcome>
          <StyledContent>
            <Profile setShowWrite={setShowWrite} />
            <List />
          </StyledContent>
          {showWrite ? <Write /> : <Content />}
        </StyledMain>
      </StyleEdge>
    </div>
  );
}

export default App;
