import styled from "styled-components";
import "../../index.css";
import { SubText } from "../Section2/Section2.styles";

export const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  justify-content: center;
  padding: 120px 40px;
  background: rgb(246, 247, 249);
`;

export const Title = styled.span`
  color: black;
  font-size: 48px;
  font-weight: 300;
  white-space: normal;
  line-height: 1.4;
`;

export const QuestionCardList = styled.div`
  margin: 0px 40px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 38px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  cursor: pointer;
  user-select: none;
`;

export const QuestionCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const QuestionTitle = styled.span`
  font-size: 28px;
  font-weight: 300;
  color: ${(props) => props.color || "black"};
  width: unset;
  white-space: normal;
`;

export const QuestionAnswer = styled.div`
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
`;
