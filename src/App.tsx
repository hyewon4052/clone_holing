import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Banner from "./components/Banner/Banner";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section7 from "./components/Section7/Section7";
import Section8 from "./components/Section8/Section8";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <Header />
      <Body>
        <Section1 />
        <Banner />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Footer />
      </Body>
    </Main>
  );
}

export default App;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(251, 251, 251);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
