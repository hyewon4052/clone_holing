import styled from "styled-components";

export const GoalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 80px;
  -webkit-box-align: center;
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
`;

export const VideoBox = styled.div`
  flex-direction: column;
  gap: 54px;
  -webkit-box-align: center;
  align-items: center;
  width: 785px;
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
