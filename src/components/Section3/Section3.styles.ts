import styled from "styled-components";
import "../../index.css";

export const StepContainer = styled.div`
  overflow: hidden;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: white;
  padding-top: 120px;
  padding-bottom: 120px;
`;

export const StepBox1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  align-items: start;
  justify-content: flex-start;
`;

export const StepBox2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 36px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StepImgBox = styled.div`
  position: relative;
  width: 521px;
  height: 400px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  box-shadow: rgba(142, 147, 148, 0.08) 16px 16px 18px 0px,
    rgba(116, 123, 126, 0.12) 5px 5px 10px 0px;
  flex-shrink: 0;
  margin: 0px 82px 30px;
`;
export const StepTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const NumberCircle = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgb(1, 172, 20) 0%,
    rgb(1, 172, 20) 50%,
    rgb(0, 164, 16) 50%,
    rgb(0, 164, 16) 100%
  );

  span {
    font-family: "MapleStory";
    font-size: 32px;
    font-weight: 600;
    color: white;
    width: 17px;
    white-space: normal;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentSpan = styled.span`
  font-family: "MapleStory";
  font-weight: 300;
  white-space: normal;
`;

export const StepDescription = styled.span`
  font-family: SUIT;
  font-size: 18px;
  font-weight: 500;
  color: rgb(117, 126, 133);
  width: unset;
  white-space: break-spaces;
  line-height: 1.6;
`;

export const StepBoxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding: 0px 40px;
  max-width: 1280px;
`;
