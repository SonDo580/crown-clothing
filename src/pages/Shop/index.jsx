import { useSelector } from "react-redux";

import {
  categoryErrorSelector,
  categoryLoadingSelector,
  categoryMapSelector,
} from "../../redux/category/categorySelectors";

import Spinner from "../../common/Spinner";
import ErrorDisplay from "../../common/ErrorDisplay";
import CategoryPreview from "../../components/CategoryPreview";

export default function Shop() {
  const categoryMap = useSelector(categoryMapSelector);
  const loading = useSelector(categoryLoadingSelector);
  const error = useSelector(categoryErrorSelector);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <>
      {Object.keys(categoryMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoryMap[title]}
        />
      ))}
    </>
  );
}
