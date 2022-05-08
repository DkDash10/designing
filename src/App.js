// import './App.css';
import styled from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const IntoShape = styled.div`
  clip-path: polygon(71% 0, 100% 0, 100% 100%, 72% 100%, 43% 55%);
  background-color: crimson;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape2 = styled.div`
  /* clip-path: polygon(71% 0, 50% 26%, 44% 66%, 72% 100%, 52% 53%); */
  clip-path: polygon(36% 48%, 44% 100%, 77% 100%, 56% 63%, 86% 0, 66% 0);
  background-color: #c4dcc4;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape3 = styled.div`
clip-path: polygon(0 0, 0 100%, 30% 100%, 44% 66%, 23% 0, 11% 0);
  background-color: #19d400;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;
const IntoShape4 = styled.div`
clip-path: polygon(58% 69%, 36% 100%, 27% 100%, 33% 35%, 18% 0, 44% 0);

  background-color: #96d4fa;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape5 = styled.div`

clip-path: polygon(0 0, 10% 0, 39% 83%, 19% 100%, 0 100%, 0% 50%);

  background-color: #ffd88a;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape6 = styled.div`

/* clip-path: polygon(26% 0, 10% 0, 39% 83%, 19% 100%, 34% 100%, 48% 100%); */
clip-path: polygon(6% 0, 36% 0, 50% 100%, 18% 100%, 39% 83%);

  background-color: #a1a1a1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape7= styled.div`
clip-path: polygon(50% 0, 72% 0, 75% 74%, 66% 100%, 42% 100%, 64% 51%);
  background-color: #f20099;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape8= styled.div`
clip-path: polygon(100% 0, 72% 0, 40% 54%, 66% 100%, 83% 100%, 100% 100%);
  background-color: #e2deff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
        <IntoShape2 />
      </Container>
      <Container>
        <Feature />
        <IntoShape3 />
        <IntoShape4 />
      </Container>
      <Container>
        <Service />
        <IntoShape5 />
        <IntoShape6 />
        {!smallScreen && <IntoShape5 />}  
      </Container>
      <Container>
        <Price />
       <IntoShape7 />
       <IntoShape8 />
      </Container>
      <Container>
        <Contact/>
        
      </Container>
    </>
  );
}

export default App;
