import styled from "styled-components";
import cloud from "../assets/images/main/cloud.svg";
import background from "../assets/images/main/bg.png";
import "../index.css";

export const IntroductionContainer = styled.div`
  background-image: url(${background});
  height: 700px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;
  background-position: center;
  padding: 192px 0px;
  display: flex;
  justify-content: center;
  gap: 170px;
  display: flex;
  width: 100%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
`;

export const Subtitle = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #000000;
`;

export const Title = styled.h1`
  font-family: "MapleStory";
  font-size: 90px;
  font-weight: 400;
  margin: 0 0 20px 0;
  color: #000000;
`;

export const Description = styled.p`
  font-size: 24px;
  line-height: 1.5;
  margin: 28px 0px 0px;
  color: #757e85;
`;

export const CTAButton = styled.button`
  width: 320px;
  height: 88px;
  background-color: #00b300;
  color: #fff;
  margin: 80px 0 0;
  border: none;
  border-radius: 999px;
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px -12px 0px 0px inset;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainImg = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloudBox = styled.div`
  background-image: url(${cloud});
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: row;
  gap: 8px;
  -webkit-box-align: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 436px;
  height: 114px;
  padding: 35px 28px 35px 49px;
`;
