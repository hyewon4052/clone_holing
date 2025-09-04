import * as S from "./Banner.styles";

function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerImg>
        <img src="/assets/images/root/banner/banner_invite.png" />
      </S.BannerImg>
      <S.BannerImg>
        <img src="/assets/images/root/banner/banner_brand.png" />
      </S.BannerImg>
    </S.BannerContainer>
  );
}

export default Banner;
