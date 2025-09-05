import styled from "styled-components";
import "../../index.css";

export const QnALayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  justify-content: center;
  padding: 120px 40px;
  background: rgb(246, 247, 249);
`;

export const QnATitle = styled.span`
  color: black;
  font-size: 48px;
  font-weight: 300;
  white-space: normal;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const QnAList = styled.div`
  margin: 0px 40px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  @media (max-width: 800px) {
    gap: 18px;
  }
`;

export const QnAItemCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 38px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  cursor: pointer;
  user-select: none;
  @media (max-width: 800px) {
    padding: 20px 18px;
  }
`;

export const QnAHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    @media (max-width: 800px) {
      width: 16px;
    }
  }
`;

export const QnALabelRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  img {
    width: 44px;
    @media (max-width: 800px) {
      width: 24px;
    }
  }
`;

export const QnATitleText = styled.span`
  font-size: 28px;
  font-weight: 300;
  color: ${(props) => props.color || "black"};
  width: unset;
  white-space: normal;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const QnAAnswerBox = styled.div`
  border-radius: 18px;
  background: rgb(245, 249, 248);
  padding: 20px;
  color: var(--gray_900, #121619);
  font-family: "Suit-regular";
  font-size: 18px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.027px;
  white-space: break-spaces;
  @media (max-width: 800px) {
    padding: 16px;
    font-size: 16px;
  }
`;
