import * as S from "./Footer.styles";

function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.FooterAnimation />
        <S.FooterContentBox>
          <S.FooterWrapper>
            <S.FooterLeft>
              <S.FooterBlock>
                <img src="/assets/images/footer/company_logo.svg" width={225} />
                <S.FooterBlock style={{ padding: " 10px 0px" }}>
                  <S.FooterRow>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      color="#3395BA"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "rgb(51, 149, 186)" }}
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
                    </svg>
                    <S.FooterTextWrapper>
                      <S.FooterText>카카오톡 문의하기</S.FooterText>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        color="#316c82"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "rgb(49, 108, 130)" }}
                      >
                        <path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.7071 7.70711L12 13.4142L10.5858 12L16.2929 6.29289L13 3H21V11L17.7071 7.70711Z"></path>
                      </svg>
                    </S.FooterTextWrapper>
                  </S.FooterRow>
                  <S.FooterRow>
                    <img src="/assets/images/footer/email.svg" />
                    <S.FooterText>help@matholic.net</S.FooterText>
                  </S.FooterRow>
                  <S.FooterRow>
                    <img src="/assets/images/footer/location.svg" />
                    <S.FooterText>
                      서울특별시 강남구 남부순환로351길 4, STAY 77, 3층
                    </S.FooterText>
                  </S.FooterRow>
                </S.FooterBlock>
              </S.FooterBlock>
              <S.FooterBlock>
                <S.FooterCopyright>© 2025 Matholic Inc.</S.FooterCopyright>
                <S.FooterCompanyInfo>
                  <S.FooterInfoItem>(주)매쓰홀릭</S.FooterInfoItem>
                  <S.FooterDivider />
                  <S.FooterInfoItem>대표이사 강지훈, 김영희</S.FooterInfoItem>
                  <S.FooterDivider />
                  <S.FooterInfoItem>
                    사업자등록번호 119-86-42991
                  </S.FooterInfoItem>
                  <S.FooterDivider />
                  <S.FooterInfoItem>
                    통신판매업신고 2025-서울강남-04724
                  </S.FooterInfoItem>
                  <S.FooterDivider />
                </S.FooterCompanyInfo>
                <S.FooterCompanyInfo>
                  <a
                    href="https://parking.matholic.com/policy/service"
                    target="_blank"
                  >
                    <S.FooterLinkItem>이용약관</S.FooterLinkItem>
                  </a>
                  <S.FooterDivider />
                  <a
                    href="https://parking.matholic.com/policy/privacy"
                    target="_blank"
                  >
                    <S.FooterLinkItem>개인정보처리방침</S.FooterLinkItem>
                  </a>
                  <S.FooterDivider />
                  <a
                    href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1198642991"
                    target="_blank"
                  >
                    <S.FooterLinkItem>사업자정보</S.FooterLinkItem>
                  </a>
                </S.FooterCompanyInfo>
              </S.FooterBlock>
            </S.FooterLeft>
            <S.FooterRight>
              <S.FooterDownload>
                <a href="https://apps.apple.com/kr/app/%ED%92%80%EB%9E%AD/id6478107698">
                  <S.FooterDownloadButton>
                    iOS 앱 다운로드
                  </S.FooterDownloadButton>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.matholic.pullang">
                  <S.FooterDownloadButton>
                    Android 앱 다운로드
                  </S.FooterDownloadButton>
                </a>
              </S.FooterDownload>
              <S.FooterSocials>
                <a href="https://blog.naver.com/ilovematholic">
                  <S.FooterSocialIcon src="/assets/images/footer/sns/blog.svg"></S.FooterSocialIcon>
                </a>
                <a href="https://www.youtube.com/channel/UC0f2occwFdAosou2Ds29AUw">
                  <S.FooterSocialIcon src="/assets/images/footer/sns/youtube.svg"></S.FooterSocialIcon>
                </a>
                <a href="https://www.facebook.com/ilovematholic">
                  <S.FooterSocialIcon src="/assets/images/footer/sns/facebook.svg"></S.FooterSocialIcon>
                </a>
                <a href="https://www.instagram.com/holing_official">
                  <S.FooterSocialIcon src="/assets/images/footer/sns/instagram.svg"></S.FooterSocialIcon>
                </a>
              </S.FooterSocials>
            </S.FooterRight>
          </S.FooterWrapper>
        </S.FooterContentBox>
      </S.FooterContainer>
    </>
  );
}

export default Footer;
