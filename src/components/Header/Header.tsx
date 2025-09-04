import * as S from "./Header.styles";

function Header() {
  return (
    <S.HeaderContainer>
      <S.Wrapper>
        <S.Logo
          src={import.meta.env.BASE_URL + "assets/images/common/favicon.svg"}
          alt="홈링 로고"
        />
        <S.NavActions>
          <S.DownloadButton href="https://apps.apple.com/kr/app/%ED%99%80%EB%A7%81-%EC%88%98%ED%95%99%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%95%B1/id6478107698">
            앱 다운로드
          </S.DownloadButton>
          <S.LoginButton>로그인</S.LoginButton>
        </S.NavActions>
      </S.Wrapper>
    </S.HeaderContainer>
  );
}

export default Header;
