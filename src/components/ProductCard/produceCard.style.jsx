import styled, { css } from "styled-components";

const selectedProductStyle = css`
  box-shadow: 0 0 5px 0 blue;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${({ isInCart }) => isInCart && selectedProductStyle}

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
