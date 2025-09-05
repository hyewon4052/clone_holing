import styled from "styled-components";
import "../../index.css";

export const StepLayout = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: white;
  padding-top: 120px;
  padding-bottom: 120px;
`;

export const StepLeftBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  align-items: start;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const StepRightBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 36px;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
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
  @media (max-width: 800px) {
    width: 273.285px;
    height: 209px;
    border-radius: 15px;
    box-shadow: rgba(142, 147, 148, 0.08) 9.94275px 9.94275px 11.1856px 0px,
      rgba(116, 123, 126, 0.12) 3.10711px 3.10711px 6.21422px 0px;
    margin: 0px;
  }

  img {
    position: absolute;
  }
  .firstBeaver {
    left: -55px;
    bottom: -22px;
    @media (max-width: 800px) {
      left: -29px;
      bottom: -11.5px;
      width: 79px;
    }
  }
  .firstOverlay {
    right: -19px;
    top: 96.08px;
    width: 264px;
    @media (max-width: 800px) {
      width: 138.745px;
      right: -10px;
      top: 50px;
    }
  }
  .secondRuby {
    right: -73px;
    bottom: -30px;
    @media (max-width: 800px) {
      width: 84px;
      right: -38px;
      bottom: -15px;
    }
  }
  .fourthBeaver {
    right: -73px;
    bottom: -30px;
    @media (max-width: 800px) {
      right: -40px;
      bottom: -16px;
      width: 83px;
    }
  }
  .fifthBeaver {
    right: -73px;
    bottom: -30px;
    @media (max-width: 800px) {
      right: -32.6px;
      bottom: -13.3px;
      width: 150px;
    }
  }
`;
export const StepTextBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 50px;
  margin-left: 50px;
  width: 300px;
  @media (max-width: 800px) {
    margin-top: 0px;
    margin-left: 0px;
    width: 300px;
    justify-content: center;
    align-items: center;
    gap: 0px;
  }
`;

export const NumberCircleBox = styled.div`
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
    @media (max-width: 800px) {
      font-size: 23px;
      width: 14px;
    }
  }
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    border-radius: 16px;
  }
`;

export const TitleBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 800px) {
    margin-top: 8px;
    text-align: center;
    gap: 2px;
  }
`;

export const SubTitleText = styled.span`
  color: var(--point_01);
  font-size: 20;
  font-weight: 300;
  white-space: normal;
  @media (max-width: 800px) {
    font-size: 18;
  }
`;

export const TitleText = styled.span`
  color: black;
  font-size: 38px;
  font-weight: 300;
  white-space: normal;
  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

export const ContentText = styled.span`
  font-weight: 300;
  white-space: normal;
`;

export const StepDescriptionText = styled.span`
  font-family: SUIT;
  font-size: 18px;
  font-weight: 500;
  color: rgb(117, 126, 133);
  width: unset;
  white-space: break-spaces;
  line-height: 1.6;
  @media (max-width: 800px) {
    text-align: center;
    margin-top: 14px;
  }
`;

export const StepBoxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding: 0px 40px;
  max-width: 1280px;
`;

export const MobileBr = styled.br`
  display: none;
  @media (max-width: 800px) {
    display: inline-block;
  }
`;
