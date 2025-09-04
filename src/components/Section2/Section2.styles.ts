import styled from "styled-components";
import "../../index.css";

export const GoalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  z-index: 0;
  width: 100%;
  position: relative;
  background: linear-gradient(
    rgb(255, 255, 255) 22.41%,
    rgb(209, 242, 254) 100%
  );
  padding: 120px 0px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const SubText = styled.span`
  color: black;
  font-size: 30px;
  font-weight: 500;
  font-family: "SUIT";
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const MainText = styled.span`
  color: #121619;
  font-size: 48px;
  font-weight: 300;
  font-family: "MapleStory";
  span {
    color: #00b300;
  }
  text-align: center;
  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 1.4;
    white-space: normal;
  }
`;

export const VideoBox = styled.div`
  flex-direction: column;
  gap: 54px;
  align-items: center;
  width: 785px;

  @media (max-width: 800px) {
    width: calc(100% - 50px);
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10.5px;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 35px;
  border: 2px solid rgb(191, 197, 203);
  background: rgb(255, 255, 255);
  padding: 25px 33px;
`;
