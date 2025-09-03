import { useRef, useState } from "react";
import {
  HeaderContainer,
  Wrapper,
  Logo,
  NavActions,
  DownloadButton,
  LoginButton,
} from "./components/Header.styles";

import {
  IntroductionContainer,
  ContentBox,
  Title,
  Subtitle,
  Description,
  CTAButton,
  MainImg,
  CloudBox,
} from "./components/Home.styles";

import { BannerContainer, BannerImg } from "./components/Banner.styles";

import {
  GoalContainer,
  TextBox,
  SubText,
  MainText,
  VideoBox,
  VideoWrapper,
} from "./components/Goal.styles";

import {
  StepContainer,
  StepBox,
  StepImgBox,
  StepTextBox,
  NumberCircle,
  TitleBox,
  ContentSpan,
  StepDescription,
} from "./components/Step.styles";

import {
  ReasonContainer,
  ReasonContentBox,
  ReasonBox,
  ReasonText,
  ReasonSpan,
} from "./components/Reason.styles";

function App() {
  const videos = [
    "assets/videos/videos_01.mp4",
    "assets/videos/videos_02.mp4",
    "assets/videos/videos_03.mp4",
  ];
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
          <Logo
            src={import.meta.env.BASE_URL + "assets/images/common/favicon.svg"}
            alt="홈링 로고"
          />
          <NavActions>
            <DownloadButton href="https://apps.apple.com/kr/app/%ED%99%80%EB%A7%81-%EC%88%98%ED%95%99%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%95%B1/id6478107698">
              앱 다운로드
            </DownloadButton>
            <LoginButton>로그인</LoginButton>
          </NavActions>
        </Wrapper>
      </HeaderContainer>

      <IntroductionContainer
        style={{
          backgroundImage: `url(${
            import.meta.env.BASE_URL + "assets/images/main/bg.png"
          })`,
        }}
      >
        <ContentBox>
          <Subtitle>스스로 학습하는 수학 공부 앱</Subtitle>
          <Title>홀링</Title>
          <Description>
            동영상 강의, 문제풀이, 오답학습까지
            <br />
            혼자서도 알차고 탄탄하게 공부해요
          </Description>
          <CTAButton>무료체험 시작하기</CTAButton>
        </ContentBox>
        <MainImg>
          <img
            src={import.meta.env.BASE_URL + "assets/images/main/scroll.svg"}
            height={"516px"}
            style={{ position: "relative" }}
          />
          <CloudBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/main/CloudBox.svg"
              })`,
            }}
          ></CloudBox>
        </MainImg>
      </IntroductionContainer>

      <BannerContainer>
        <BannerImg
          src={
            import.meta.env.BASE_URL + "assets/images/banner/banner_invite.png"
          }
        />
        <BannerImg
          src={
            import.meta.env.BASE_URL + "assets/images/banner/banner_brand.png"
          }
        />
      </BannerContainer>

      <GoalContainer>
        <TextBox>
          <SubText>초등부터 중·고등까지</SubText>
          <MainText style={{ marginBottom: "80px" }}>
            <span>하루 30분</span>
            이면 한 학기 수학을 완성할 수 있어요
          </MainText>
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
          <MainText style={{ marginBottom: 80 }}>
            홀링은 <span>스스로 끝까지</span> 해낼 수 있는
            <br />
            습관과 자신감을 길러줘요
          </MainText>
        </TextBox>
        <StepBox>
          <StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/steps/step1.png"
              })`,
            }}
          >
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/steps/step1_beaver.svg"
              }
              style={{ position: "absolute", left: -"55px", bottom: "-22px" }}
            />
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/steps/step1_overlay.svg"
              }
              width="264"
              style={{ position: "absolute", right: "-19px", top: "96.08px" }}
            />
          </StepImgBox>
          <StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <NumberCircle>
              <span>1</span>
            </NumberCircle>
            <TitleBox>
              <ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                문제풀이를 도와주는
              </ContentSpan>
              <ContentSpan style={{ color: "black", fontSize: 38 }}>
                동영상 강의
              </ContentSpan>
            </TitleBox>
            <StepDescription>
              어려운 문제가 있으면 동영상 강의를 듣고 기초 개념과 유형을 다시
              학습해 보세요.
            </StepDescription>
          </StepTextBox>
        </StepBox>
        <StepBox>
          <StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <NumberCircle>
              <span>2</span>
            </NumberCircle>
            <TitleBox>
              <ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                개념과 유형을 모두 잡는
              </ContentSpan>
              <ContentSpan style={{ color: "black", fontSize: 38 }}>
                단계별 구성
              </ContentSpan>
            </TitleBox>
            <StepDescription>
              기초 개념부터 마무리까지 정해진 구성을 따라 학습하면서 단원을
              마스터해보세요.
            </StepDescription>
          </StepTextBox>
          <StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/steps/step2.png"
              })`,
            }}
          >
            <img
              src={import.meta.env.BASE_URL + "assets/images/steps/ruby.svg"}
              style={{ position: "absolute", right: "-73px", bottom: "-30px" }}
            />
          </StepImgBox>
        </StepBox>
        <StepBox>
          <StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/steps/step3.png"
              })`,
            }}
          ></StepImgBox>
          <StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <NumberCircle>
              <span>3</span>
            </NumberCircle>
            <TitleBox>
              <ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                실력을 업그레이드하는
              </ContentSpan>
              <ContentSpan style={{ color: "black", fontSize: 38 }}>
                레벨업 학습
              </ContentSpan>
            </TitleBox>
            <StepDescription>
              레벨을 점점 올리면서 난이도 있는 문제를 풀고, 내 실력도 함께
              높여보세요.
            </StepDescription>
          </StepTextBox>
        </StepBox>
        <StepBox>
          <StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <NumberCircle>
              <span>4</span>
            </NumberCircle>
            <TitleBox>
              <ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                취약 유형을 클리어하는
              </ContentSpan>
              <ContentSpan style={{ color: "black", fontSize: 38 }}>
                챌린지 학습
              </ContentSpan>
            </TitleBox>
            <StepDescription>
              AI 학습 분석으로 현재 실력을 진단하고, 부족한 유형을 보완해
              보세요.
            </StepDescription>
          </StepTextBox>
          <StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/steps/step4.png"
              })`,
            }}
          >
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/steps/step4_beaver.svg"
              }
              style={{ position: "absolute", right: "-73px", bottom: "-30px" }}
            />
          </StepImgBox>
        </StepBox>

        <StepBox>
          <StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/steps/step5.png"
              })`,
            }}
          >
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/steps/step5_beaver.svg"
              }
              style={{ position: "absolute", right: "-73px", bottom: "-30px" }}
            />
          </StepImgBox>
          <StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <NumberCircle>
              <span>5</span>
            </NumberCircle>
            <TitleBox>
              <ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                의욕과 재미를 더하는
              </ContentSpan>
              <ContentSpan style={{ color: "black", fontSize: 38 }}>
                학습 보상
              </ContentSpan>
            </TitleBox>
            <StepDescription>
              학습 목표를 달성해 루비를 모으고 게임도 참여하면서 즐겁게 공부해
              보세요.
            </StepDescription>
          </StepTextBox>
        </StepBox>
      </StepContainer>

      <ReasonContainer>
        <TextBox>
          <MainText style={{ marginBottom: "20px", fontWeight: 300 }}>
            홀링으로 공부하면
            <br /> <span style={{ color: "#00AB15" }}>수학 실력이 오르는 </span>
            이유
          </MainText>
        </TextBox>
        <ReasonBox>
          <ReasonContentBox>
            <ReasonText>
              <ReasonSpan>
                30억 누적 데이터가 안내하는
                <br />
                학습 경로로 더 빠르게
              </ReasonSpan>
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/reason/reason1.svg"
                }
                width="100%"
              />
            </ReasonText>
          </ReasonContentBox>
          <ReasonContentBox>
            <ReasonText>
              <ReasonSpan>
                학교 현장에서 인정받는
                <br />
                학습 내용으로 더 촘촘하게
              </ReasonSpan>
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/reason/reason2.svg"
                }
                width="100%"
              />
            </ReasonText>
          </ReasonContentBox>
        </ReasonBox>
      </ReasonContainer>
    </>
  );
}

export default App;
