import { useSelector } from "react-redux";

import { categoryListSelector } from "../../redux/category/categorySelectors";
import { CategoriesContainer } from "./categories.style";
import Category from "../Category";

export default function Categories() {
  const categories = useSelector(categoryListSelector);

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}
