import styled from "styled-components";
import "../../index.css";

export const ParentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  width: 100%;
  padding: 120px 0px;
`;

export const ParentsImgWrapper = styled.div`
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
`;

export const ParentsTextWrapper = styled.div`
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

export const ParentsContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;

export const ParentsTitle = styled.span`
  font-size: 30px;
  font-weight: 300;
  color: black;
  text-align: center;
  width: unset;
  white-space: break-spaces;
  line-height: 1.4;
`;

export const ParentsAuthor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ParentsName = styled.span`
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

export const ParentsInfo = styled.span`
  font-family: "Suit-regular";
  font-size: 16px;
  font-weight: 500;
  white-space: normal;
`;

export const ParentsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  align-items: center;
  justify-content: center;
`;
