import * as S from "./Section1.styles";

function Section1() {
  return (
    <S.IntroLayout>
      <S.IntroTitleBox>
        <S.SubTitleText>스스로 학습하는 수학 공부 앱</S.SubTitleText>
        <S.TitleText>홀링</S.TitleText>
        <S.DescriptionText>
          동영상 강의, 문제풀이, 오답학습까지
          <br />
          혼자서도 알차고 탄탄하게 공부해요
        </S.DescriptionText>
        <a href="/signup?inviteCode=09ea221d3db11df1f369094ffb4bda7c">
          <S.CTAButton style={{ marginTop: "80px" }}>
            무료체험 시작하기
          </S.CTAButton>
        </a>
      </S.IntroTitleBox>
      <S.MainImgBox>
        <img
          src={import.meta.env.BASE_URL + "assets/images/root/main/scroll.svg"}
          height={"516px"}
          style={{ position: "relative" }}
        />
        <S.CloudImgBox>
          <img src="/assets/images/root/main/tablet.svg" />
          <S.NoticeText>
            홀링 앱은 <S.MobileBr />
            <S.HighlightText>태블릿, 스마트폰</S.HighlightText>에서
            <br />
            다운로드 및 이용 가능
          </S.NoticeText>
        </S.CloudImgBox>
      </S.MainImgBox>
      <S.CTAMobileButton>무료체험 시작하기</S.CTAMobileButton>
    </S.IntroLayout>
  );
}

export default Section1;
