import * as S from "./Banner.styles";
import "../../index.css";

function Banner() {
  return (
    <S.BannerContainer style={{ width: "100%" }}>
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
