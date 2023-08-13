import styled from "styled-components";
import { DefaultButton } from "@/common/Button/button.style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  max-height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${DefaultButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
