import { BannerContainer, BannerImg } from "./Banner.styles";

function Banner() {
  return (
    <BannerContainer>
      <BannerImg
        src={
          import.meta.env.BASE_URL +
          "assets/images/root/banner/banner_invite.png"
        }
      />
      <BannerImg
        src={
          import.meta.env.BASE_URL +
          "assets/images/root/banner/banner_brand.png"
        }
      />
    </BannerContainer>
  );
}

export default Banner;
