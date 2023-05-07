import { categories } from "../../constants/categories";
import "./categories.scss";
import Category from "../Category";

export default function Categories() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
