import { useSelector } from "react-redux";
import { categoryMapSelector } from "../../redux/category/categorySelectors";
import CategoryPreview from "../../components/CategoryPreview";

export default function Shop() {
  const categoryMap = useSelector(categoryMapSelector);

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
