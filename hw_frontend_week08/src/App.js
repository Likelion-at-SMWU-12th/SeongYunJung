import { useState } from "react";
import Content from "./components/Content";
import { styled } from "styled-components";
import { PartProvider } from "./contexts/PartContext";
// import { usePart } from "./contexts/PartContext";

function App() {
  // const [part, setPart] = useState("");
  // const { part, clickPart } = usePart();
  return (
    <PartProvider>
      <Wrapper>
        <div className="title">
          숙명여대 멋쟁이사자처럼 <span></span> 파트 구성원
        </div>
        <Content />
      </Wrapper>
    </PartProvider>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  .title {
    text-align: center;
    padding: 50px 0;
    font-size: 30px;
    font-weight: 700;
    span {
      color: #ee7521;
    }
  }
`;
