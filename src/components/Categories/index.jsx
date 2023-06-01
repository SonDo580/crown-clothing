import { useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import { CategoriesContainer } from "./categories.style";
import Category from "../Category";

export default function Categories() {
  const { categories } = useContext(CategoriesContext);

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}
