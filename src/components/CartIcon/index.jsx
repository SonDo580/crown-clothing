import "./cartIcon.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

export default function CartIcon() {
  return (
    <div className="cart-icon-container">
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
