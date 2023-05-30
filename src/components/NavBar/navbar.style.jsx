import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 40px;

  position: sticky;
  top: 0;
  z-index: 10;

  background-color: white;
  box-shadow: 0 0 5px 0 gray;
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  padding: 25px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;

  &.active {
    color: blue;
  }
`;
