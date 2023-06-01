import { useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview";

export default function Shop() {
  const { categoryMap } = useContext(CategoriesContext);

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
