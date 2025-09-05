import styled from "styled-components";
import "../../index.css";

export const IntroductionContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  gap: 170px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: calc(-415px + 50vh) 0px;
  position: relative;
  background-image: url(/assets/images/root/main/bg.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;

  @media (max-width: 800px) {
    background-color: rgb(208, 241, 253);
    background-image: none;
    flex-direction: column;
    padding: 80px 0px;
    gap: 50px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const Subtitle = styled.span`
  font-family: "Suit-semibold";
  font-size: 30px;
  font-weight: 700;
  color: black;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: 1.5;
`;

export const Title = styled.h1`
  font-family: "Maplestory";
  font-size: 90px;
  font-weight: 400;
  color: black;
  width: unset;
  white-space: normal;
  line-height: 1.5;
  -webkit-text-stroke: 2px black;
  margin: 0;
  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Description = styled.span`
  font-family: "Suit-regular";
  font-size: 24px;
  color: rgb(117, 126, 133);
  text-align: left;
  width: unset;
  white-space: normal;
  line-height: 1.6;
`;

export const CTAButton = styled.button`
  display: flex;
  width: 320px;
  height: 88px;
  padding-top: 25px;
  flex-direction: column;
  align-items: center;
  gap: 8.723px;
  border-radius: 44px;
  background: #00ab15;
  box-shadow: rgba(0, 0, 0, 0.12) 0px -12px 0px 0px inset;
  cursor: pointer;
  user-select: none;
  color: rgb(255, 255, 255);
  font-family: "Maplestory";
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.52px;
  transition: transform 0.2s ease-in-out;
`;

export const MainImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    display: block;
  }
`;

export const CloudBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  background-image: url(/assets/images/root/main/cloud.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 436px;
  height: 114px;
  padding: 35px 28px 35px 49px;
`;

export const NoticeText = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: rgb(74, 78, 83);
  text-align: center;
  width: unset;
  white-space: normal;
`;

export const HighlightText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: rgb(0, 171, 21);
  text-align: center;
  width: unset;
  white-space: normal;
`;
