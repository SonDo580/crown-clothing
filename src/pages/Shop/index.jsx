import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import { CategoriesContext } from "../../contexts/CategoriesContext";

import CategoryPreview from "../../components/CategoryPreview";

export default function Shop() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const currentUser = useContext(UserContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth", { state: { prevPath: pathname } });
    }
  }, [currentUser, pathname, navigate]);

  const categoryMap = useContext(CategoriesContext);

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
