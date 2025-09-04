import { BannerContainer, BannerImg } from "./Banner.styles";

function Banner() {
  return (
    <BannerContainer>
      <BannerImg>
        <img src="/assets/images/root/banner/banner_invite.png" />
      </BannerImg>
      <BannerImg>
        <img src="/assets/images/root/banner/banner_brand.png" />
      </BannerImg>
    </BannerContainer>
  );
}

export default Banner;
