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
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const BannerImg = styled.img`
  width: 50vw;
  height: 120px;
  background-repeat: no-repeat;
`;
