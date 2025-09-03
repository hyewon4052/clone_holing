import {
  IntroductionContainer,
  ContentBox,
  Title,
  Subtitle,
  Description,
  CTAButton,
  MainImg,
  CloudBox,
} from "./Section1.styles";

function Section1() {
  return (
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
  );
}

export default Section1;
