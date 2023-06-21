import { useSelector } from "react-redux";

import {
  categoryErrorSelector,
  categoryListSelector,
  categoryLoadingSelector,
} from "../../redux/category/categorySelectors";

import { CategoriesContainer } from "./categories.style";
import Spinner from "../../common/Spinner";
import Category from "../Category";
import ErrorDisplay from "../../common/ErrorDisplay";

export default function Categories() {
  const categories = useSelector(categoryListSelector);
  const loading = useSelector(categoryLoadingSelector);
  const error = useSelector(categoryErrorSelector);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Category key={category.title} category={category} />
      ))}
    </CategoriesContainer>
  );
}
