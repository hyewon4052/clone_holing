import styled from "styled-components";
import "../../index.css";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;

export const FooterAnimation = styled.div`
  width: 100%;
  height: 78px;
  background-image: url(/assets/images/footer/flow.svg);
  background-repeat: repeat;
  background-position: 0px 0px;
  background-size: auto 100%;
  animation: 150s linear 0s infinite normal none running animation-yv27ub;
`;

export const FooterContentBox = styled.div`
  background: rgb(193, 233, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 384px;
  padding: 40px;
  background: rgb(193, 233, 248);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterRow = styled.div`
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

export const FooterCopyright = styled.span`
  font-family: "Suit-extrabold";
  font-size: 16px;
  font-weight: 600;
  color: #427b91;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const FooterCompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const FooterInfoItem = styled.span`
  color: rgb(88, 145, 166);
  font-family: "Suit-extrabold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const FooterDivider = styled.div`
  width: 6px;
  height: 6px;
  background: rgb(146, 211, 235);
  border-radius: 6px;
`;

export const FooterLinkItem = styled.div`
  color: rgb(122, 175, 194);
  font-family: "Suit-extrabold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FooterDownload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FooterSocialIcon = styled.img`
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;
