import { useDispatch, useSelector } from "react-redux";

import { cartItemsSelector } from "../../redux/cart/cartSelectors";
import { toggleCartVisible } from "../../redux/cart/cartSlice";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cartIcon.style.jsx";

export default function CartIcon() {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const handleClick = () => dispatch(toggleCartVisible());

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItems.length}</ItemCount>
    </CartIconContainer>
  );
}
