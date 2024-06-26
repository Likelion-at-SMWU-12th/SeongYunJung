import "./App.css";
import Profile from "./Profile";
import List from "./List";
import Content from "./Content";
import styled from "styled-components";

const StyleEdge = styled.div`
  background: #ebebeb;
  min-height: 100vh;
`;
const StyledMain = styled.div`
  width: 1000px;
  padding: 50px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  min-height: 100vh;
`;

const StyledWelcome = styled.h1`
  background-color: #c0c0c0;
  padding: 10px 20px;
  margin: 0px 30px 5px 30px;
`;

const StyledContent = styled.div`
  display: flex;
`;

function App() {
  return (
    <div>
      <StyleEdge>
        <StyledMain>
          <StyledWelcome>Welcome to Yunjung's Board</StyledWelcome>
          <StyledContent>
            <Profile />
            <List />
          </StyledContent>
          <Content />
        </StyledMain>
      </StyleEdge>
    </div>
  );
}

export default App;
