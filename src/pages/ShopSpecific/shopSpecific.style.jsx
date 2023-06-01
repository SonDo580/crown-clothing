import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  text-transform: capitalize;
  font-size: 38px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
