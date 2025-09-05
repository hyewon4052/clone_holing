import styled from "styled-components";
import "../../index.css";

export const BannerLayout = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding: 120px 0px 0px 0px;
  width: 100%;
  max-width: 1280px;
  @media (max-width: 800px) {
    padding: 80px 20px;
  }
`;

export const BannerBgRow = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 119px;
  background-image: url(/assets/images/root/banner/bg.png);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center 0px;
  @media (max-width: 800px) {
    height: 180px;
  }
`;

export const BannerOverlayCol = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  inset: 0px;
  background: rgba(255, 135, 0, 0.7);
  border-radius: 20px;
`;

export const BannerContentRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0px;
  background: linear-gradient(
    90deg,
    rgba(255, 135, 0, 0) 0%,
    rgba(255, 135, 0, 0.49) 19.5%,
    rgba(255, 135, 0, 0.9) 53.5%,
    rgba(255, 135, 0, 0.45) 80.5%,
    rgba(255, 135, 0, 0) 100%
  );
  backdrop-filter: blur(1px);
  border-radius: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const BannerText = styled.span`
  font-family: SUIT;
  font-size: 34px;
  font-weight: 800;
  color: rgb(255, 255, 255);
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: inherit;
  letter-spacing: -1px;
  span {
    font-family: inherit;
    font-size: 34px;
    font-weight: 500;
    color: rgb(255, 246, 36);
    text-align: inherit;
    width: unset;
    white-space: normal;
    line-height: inherit;
    @media (max-width: 800px) {
      font-size: 24px;
    }
  }
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

export const ServiceLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: white;
  @media (max-width: 800px) {
    padding: 80px 20px;
  }
`;

export const ServiceContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  width: 100%;
  background: white;
  padding: 100px 0px;
`;

export const Title = styled.span`
  width: unset;
  white-space: normal;
  color: rgb(37, 37, 37);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 800px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
`;

export const ServiceItemRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ServiceImgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
  img {
    width: 525px;
    max-width: 100%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export const ServiceDetailCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-left: 64px;
  @media (max-width: 800px) {
    padding-top: 30px;
    padding-left: 0px;
    justify-content: center;
    align-items: center;
  }
`;

export const ServiceTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ServiceTitleText = styled.span`
  color: rgb(18, 22, 25);
  font-family: Pretendard;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.38px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-size: 24px;
    font-weight: 600px;
    margin-bottom: 0px;
  }
`;

export const ServiceSubTitleText = styled.span`
  color: rgb(18, 22, 25);
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500px;
  line-height: normal;
  margin-bottom: 24px;
  @media (max-width: 800px) {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    white-space: pre-line;
  }
`;

export const ServiceDescriptionText = styled.span`
  color: rgb(117, 126, 133);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: -0.027px;
  white-space: break-spaces;
  margin-bottom: 24px;
  @media (max-width: 800px) {
    color: rgb(119, 119, 119);
    font-weight: 400px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
`;

export const ServiceIconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 800px) {
    gap: 10px;
  }
`;

export const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 65px;
  @media (max-width: 800px) {
    gap: 10px;
    margin-top: 24px;
  }
`;

export const ThickBtnBox = styled.a`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  text-decoration: none;
  border-radius: 50px;
  background: rgb(38, 161, 250);
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 136%;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  @media (max-width: 800px) {
    width: 156px;
    height: 64px;
    font-size: 14px;
    line-height: 20px;
    gap: 10px;
  }
`;

export const BtnContentCol = styled.span`
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: inherit;
  flex-shrink: 0;
`;

export const BtnTitleText = styled.span`
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const BtnSubText = styled.span`
  font-family: inherit;
  font-size: 0.8em;
  font-weight: 400;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const ThinBtnBox = styled.a`
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  text-decoration: none;
  border-radius: 50px;
  background: rgb(38, 161, 250);
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700px;
  line-height: 136%;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  @media (max-width: 800px) {
    line-height: 20px;
    gap: 10px;
    width: 260px;
    height: 56px;
    font-size: 18px;
  }
`;
