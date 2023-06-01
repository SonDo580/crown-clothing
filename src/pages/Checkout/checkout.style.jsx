import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  font-size: 1.2rem;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalDisplay = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
