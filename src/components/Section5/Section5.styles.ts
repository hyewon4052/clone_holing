import styled from "styled-components";
import "../../index.css";

export const ParentsLayout = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  width: 100%;
  padding: 120px 20px;
  @media (max-width: 800) {
    padding: 80px 0px;
  }
`;

export const ParentsImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ParentsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 30px 40px;
  width: 376px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(85, 86, 86, 0.12) 4px 4px 20px 0px;
  @media (max-width: 800px) {
    padding: 30px 20px;
    width: calc(100%);
  }
`;

export const ParentsCardHeaderCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const ParentsDescription = styled.div`
  font-family: "Suit-legular";
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.5;
  height: 116px;
  color: black;
`;
export const ParentsTitleText = styled.span`
  font-size: 30px;
  font-weight: 300;
  color: black;
  text-align: center;
  width: unset;
  white-space: break-spaces;
  line-height: 1.4;
`;

export const ParentsContentCol = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: rgb(117, 126, 133);
`;

export const ParentsNameText = styled.span`
  font-family: "Suit-regular";
  font-size: 16px;
  font-weight: 500;
  white-space: normal;
`;

export const VerticalLine = styled.div`
  flex-shrink: 0;
  width: 1px;
  height: 14px;
  background-color: rgb(217, 221, 224);
`;

export const ParentsInfoText = styled.span`
  font-family: "Suit-regular";
  font-size: 16px;
  font-weight: 500;
  white-space: normal;
`;

export const ParentsCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
