import Button from "../../common/Button";
import "./cartDropdown.scss";

export default function CartDropdown() {
  return (
    <div className="dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to Checkout</Button>
    </div>
  );
}
