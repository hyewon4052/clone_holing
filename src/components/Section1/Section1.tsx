import {
  IntroductionContainer,
  ContentBox,
  Title,
  Subtitle,
  Description,
  CTAButton,
  MainImg,
  CloudBox,
  NoticeText,
  HighlightText,
} from "./Section1.styles";

function Section1() {
  return (
    <IntroductionContainer>
      <ContentBox>
        <Subtitle>스스로 학습하는 수학 공부 앱</Subtitle>
        <Title>홀링</Title>
        <Description>
          동영상 강의, 문제풀이, 오답학습까지
          <br />
          혼자서도 알차고 탄탄하게 공부해요
        </Description>
        <a href="/signup?inviteCode=09ea221d3db11df1f369094ffb4bda7c">
          <CTAButton style={{ marginTop: "80px" }}>무료체험 시작하기</CTAButton>
        </a>
      </ContentBox>
      <MainImg>
        <img
          src={import.meta.env.BASE_URL + "assets/images/root/main/scroll.svg"}
          height={"516px"}
          style={{ position: "relative" }}
        />
        <CloudBox>
          <img src="/assets/images/root/main/tablet.svg" />
          <NoticeText>
            홀링 앱은 <HighlightText>태블릿, 스마트폰</HighlightText>에서
            <br />
            다운로드 및 이용 가능
          </NoticeText>
        </CloudBox>
      </MainImg>
    </IntroductionContainer>
  );
}

export default Section1;
