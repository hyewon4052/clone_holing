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
  @media (max-width: 800px) {
    gap: 70px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReasonContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  img {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: calc(100% - 80px);
  }
`;

export const ReasonSpan = styled.span`
  font-size: 34px;
  font-weight: 300;
  color: black;
  text-align: center;
  white-space: break-spaces;
  line-height: 1.4;
  letter-spacing: -0.68px;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;
