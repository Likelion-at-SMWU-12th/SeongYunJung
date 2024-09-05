import Content from "./components/Content";
import { styled } from "styled-components";
import { PartProvider } from "./contexts/PartContext";

function App() {
  return (
    <PartProvider>
      <Wrapper>
        <Content />
      </Wrapper>
    </PartProvider>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
