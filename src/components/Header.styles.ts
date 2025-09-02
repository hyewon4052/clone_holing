import styled from "styled-components";

export const HeaderContainer = styled.nav`
  position: fixed;
  display: flex;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Wrapper = styled.div`
  flex-direction: row;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17vw;
  width: 100%;
`;


export const Logo = styled.img`
  height: 60px;
  width : 60px;
  cursor: pointer;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DownloadButton = styled.a`
  height: 40px;
  padding: 0 30px;
  user-select: none;
  background: rgb(0, 171, 21);
  color: #fff;
  border-radius: 300px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px -5px 0px 0px inset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;


export const LoginButton = styled.button`
  background: transparent;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  color:black;
  &:hover {
    color: #00b300;
  }
`;
