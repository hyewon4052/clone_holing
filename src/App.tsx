import {
  HeaderContainer,
  Wrapper,
  Logo,
  NavActions,
  DownloadButton,
  LoginButton
} from "./components/Header.styles";
import {
  IntroductionContainer,
  ContentBox,
  Title,
  Subtitle,
  Description,
  CTAButton,
  MainImg,
  CloudBox
} from "./components/Home.styles";
import {
  BannerContainer,
  BannerImg
} from "./components/Banner.styles";

import scroll from "./assets/images/main/scroll.svg";
import bannerBrand from './assets/images/banner/banner_brand.png';
import bannerInvite from './assets/images/banner/banner_invite.png';
import logo from "./assets/images/common/favicon.svg";


function App() {

  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <Logo src={logo} alt="홈링 로고" />
          <NavActions>
            <DownloadButton
              href="https://apps.apple.com/kr/app/%ED%99%80%EB%A7%81-%EC%88%98%ED%95%99%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%95%B1/id6478107698">
              앱 다운로드
            </DownloadButton>
            <LoginButton>로그인</LoginButton>
          </NavActions>
        </Wrapper>
      </HeaderContainer>

      <IntroductionContainer>
        <ContentBox>
          <Subtitle>스스로 학습하는 수학 공부 앱</Subtitle>
          <Title>홀링</Title>
          <Description>
            동영상 강의, 문제풀이, 오답학습까지<br />
            혼자서도 알차고 탄탄하게 공부해요
          </Description>
          <CTAButton>무료체험 시작하기</CTAButton>
        </ContentBox>
        <MainImg>
          <img src={scroll} height={"516px"} style={{ position: "relative" }} />
          <CloudBox>
          </CloudBox>
        </MainImg>
      </IntroductionContainer>

      <BannerContainer>
        <BannerImg src={bannerInvite} />
        <BannerImg src={bannerBrand} />
      </BannerContainer>

      
    </>
  );
}

export default App;