
import { useRef, useState } from "react";
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

import {
  GoalContainer,
  TextBox,
  SubText,
  MainText,
  VideoBox,
  VideoWrapper
} from "./components/Goal.styles";

import { StepContainer } from "./components/Step.styles";

import video1 from "./assets/videos/영상_01.mp4";
import video2 from "./assets/videos/영상_02.mp4";
import video3 from "./assets/videos/영상_03.mp4";
import scroll from "./assets/images/main/scroll.svg";
import bannerBrand from './assets/images/banner/banner_brand.png';
import bannerInvite from './assets/images/banner/banner_invite.png';
import logo from "./assets/images/common/favicon.svg";


function App() {
  const videos = [video1, video2, video3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };


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

      <GoalContainer>
        <TextBox>
          <SubText>초등부터 중·고등까지</SubText>
          <MainText style={{ marginBottom: "80px" }}>
            <span>하루 30분</span>
            이면 한 학기 수학을 완성할 수 있어요</MainText>
        </TextBox>
        <VideoBox>
          <VideoWrapper>
            <video
              ref={videoRef}
              key={currentIndex}
              autoPlay
              onEnded={handleEnded}
              style={{
                width: "100%",
                display: "block",
                border: "1px solid rgb(191, 197, 203)",
              }}
            >
              <source src={videos[currentIndex]} type="video/mp4" />
            </video>
          </VideoWrapper>
        </VideoBox>
      </GoalContainer>

      <StepContainer>
        <TextBox>
          <SubText>초등 수학 공부, 아이가 잘 따라갈 수 있을까요?</SubText>
          <MainText>홀링은 <span>스스로 끝까지</span> 해낼 수 있는<br />
            습관과 자신감을 길러줘요</MainText>
        </TextBox>
      </StepContainer>

    </>
  );
}

export default App;