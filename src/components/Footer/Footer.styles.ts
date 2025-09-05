import styled from "styled-components";
import "../../index.css";

export const FooterLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;

export const FooterAnimationBox = styled.div`
  width: 100%;
  height: 78px;
  background-image: url(/assets/images/footer/flow.svg);
  background-repeat: repeat;
  background-position: 0px 0px;
  background-size: auto 100%;
  animation: 150s linear 0s infinite normal none running animation-yv27ub;
`;

export const FooterContentBoxCol = styled.div`
  background: rgb(193, 233, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 800px) {
    height: 100%;
    padding: 60px 18px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 36px;
    width: 100%;
  }
`;

export const FooterContentBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 384px;
  padding: 40px;
  background: rgb(193, 233, 248);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 800px) {
    padding: 0px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 36px;
  }
`;

export const FooterLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 800px) {
    gap: 36px;
  }
`;

export const FooterBlockBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterTextRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 0px 8px;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const FooterText = styled.span`
  font-family: "Suit-semibold";
  font-size: 18px;
  font-weight: 600;
  color: rgb(49, 108, 130);
  width: unset;
  white-space: break-spaces;
`;

export const FooterCopyrightText = styled.span`
  font-family: "Suit-extrabold";
  font-size: 16px;
  font-weight: 600;
  color: #427b91;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const CompanyInfoBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
`;

export const FooterInfoText = styled.span`
  color: rgb(88, 145, 166);
  font-family: "Suit-extrabold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  @media (max-width: 800px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const FooterDivider = styled.div`
  width: 6px;
  height: 6px;
  background: rgb(146, 211, 235);
  border-radius: 6px;
`;

export const FooterMobileDivider = styled.div`
  width: 6px;
  height: 6px;
  background: rgb(146, 211, 235);
  border-radius: 6px;
  @media screen {
    display: none;
  }
`;

export const FooterLinkBox = styled.div`
  color: rgb(122, 175, 194);
  font-family: "SUIT";
  font-size: 14px;
  font-style: normal;
  font-weight: 600px;
  @media screen {
    font-size: 12px;
    font-weight: 500px;
  }
`;

export const FooterRightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FooterDownloadBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const FooterDownloadButton = styled.div`
  display: flex;
  width: 230px;
  height: 62px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 6.154px;
  border-radius: 31.043px;
  background: var(--p_green_500_btON, #00ab15);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -8px 0px 0px inset;
  color: rgb(255, 255, 255);
  font-family: Maplestory;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;

export const FooterSocialsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FooterIconImg = styled.img`
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;

export const FooterMobileBoxRow = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: center;
  }
`;

export const MobileBr = styled.br`
  display: none;
  @media (max-width: 800px) {
    display: inline-block;
  }
`;
