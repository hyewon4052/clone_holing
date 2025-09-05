import styled from "styled-components";
import "../../index.css";

export const HeaderContainer = styled.nav`
  margin: 0;
  display: flex;
  background: white;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid rgb(230, 231, 234);
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 0px 40px;
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
  cursor: pointer;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DownloadButton = styled.a`
  font-family: Suit;
  height: 40px;
  padding: 0 30px;
  user-select: none;
  background: rgb(0, 171, 21);
  color: #fff;
  border-radius: 300px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px -5px 0px 0px inset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 800px) {
    padding: 0px 15px 0px;
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
  font-family: "MapleStory";
  background: transparent;
  border: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  color: black;
  &:hover {
    color: #00b300;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MobileLoginButton = styled.a`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
