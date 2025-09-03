import styled from "styled-components";
import "../../index.css";

export const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  background: rgb(246, 247, 249);
  padding: 120px 0px;
`;

export const ReasonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  justify-content: center;
`;

export const ReasonContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  width: 450px;
`;

export const ReasonText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

export const ReasonSpan = styled.span`
  font-family: "MapleStory";
  font-size: 34px;
  font-weight: 300;
  color: black;
  text-align: center;
  white-space: break-spaces;
  line-height: 1.4;
  letter-spacing: -0.68px;
`;
