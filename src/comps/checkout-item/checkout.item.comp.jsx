import { useContext } from "react";
import { CartContext } from "../../contexts/cart.ctx";
import "./checkout.item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, id, quantity } = cartItem;
  const { CartItem, increaseAmount, decreaseAmount, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseAmount(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseAmount(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div title="delete"
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
