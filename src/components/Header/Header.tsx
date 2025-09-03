import {
  HeaderContainer,
  Wrapper,
  Logo,
  NavActions,
  DownloadButton,
  LoginButton,
} from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo
          src={
            import.meta.env.BASE_URL + "assets/images/root/common/favicon.svg"
          }
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
  );
}

export default Header;
