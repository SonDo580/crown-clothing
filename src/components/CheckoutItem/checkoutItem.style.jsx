import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Cell = styled.div`
  width: 23%;
  ${({ columnTitle }) => columnTitle === "quantity" && "display: flex;"}
`;

export const Input = styled.input`
  width: 50px;
  text-align: right;
  font-size: 1rem;
`;

const getButtonStyle = (type) => {
  if (type === "arrow") {
    return "cursor: pointer; font-size: large;";
  }

  if (type === "remove") {
    return "font-size: x-large;";
  }

  return "";
};

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ type }) => getButtonStyle(type)}
`;
