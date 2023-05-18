import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Shop() {
  const products = useContext(ProductsContext);

  return (
    <div>
      {products.map(({ id, name }) => (
        <h1 key={id}>{name}</h1>
      ))}
    </div>
  );
}
