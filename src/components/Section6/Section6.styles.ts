import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 66px 0px;
  background-image: url(/assets/images/root/freestart/bg.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(132, 223, 255, 0.32);
  @media (max-width: 800px) {
    padding: 40px 40px 52px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const SubTitle = styled.span`
  font-family: inherit;
  font-size: 30px;
  font-weight: 300;
  color: rgb(0, 171, 21);
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const Title = styled.span`
  font-family: inherit;
  font-size: 48px;
  color: rgb(18, 22, 25);
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

export const LoginBtn = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  padding: 20px 69px 29px;
  color: rgb(255, 255, 255);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  border-radius: 44px;
  background: var(--p_green_500_btON, #00ab15);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -10px 0px 0px inset;
  transition: transform 0.1s ease-in-out;
  @media (max-width: 800px) {
    font-size: 22px;
    padding: 19px 59px 25px;
  }
`;
