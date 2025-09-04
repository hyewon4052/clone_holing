import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(65, 129, 248) 50%,
    rgb(34, 201, 247) 50%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BannerImg = styled.div`
  cursor: pointer;
  z-index: 2;
  height: 120px;
  img {
    margin: 0px auto;
    display: block;
    height: 100%;
  }
`;
