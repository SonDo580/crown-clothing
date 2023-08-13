import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  text-decoration: underline;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
