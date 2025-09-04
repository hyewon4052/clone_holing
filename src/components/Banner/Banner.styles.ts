import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
    background-image: linear-gradient(
      90deg,
      rgb(65, 129, 248) 50%,
      rgb(34, 201, 247) 50%
    );
    flex-direction: column;
  }
`;

export const BannerImg = styled.div`
  cursor: pointer;
  z-index: 2;
  height: 120px;
  width: auto;
  @media (max-width: 800px) {
    height: auto;
  }
  img {
    margin: 0px auto;
    display: block;
    height: 100%;
    @media (max-width: 800px) {
      margin: 0px auto;
      display: block;
      width: 100%;
    }
  }
`;
