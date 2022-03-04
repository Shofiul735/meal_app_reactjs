import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import Cart from "./Cart";
import CartContext from "../../context/cart-context";

import classes from "./CartList.module.css";

const CartList = (props) => {
  const context = useContext(CartContext);
  const items = [...context.items];
  const list = items.map((item) => (
    <Cart
      key={item.id}
      name={item.name}
      price={item.price}
      count={item.count}
      onAdd={context.addItem.bind(null, item)}
      onRemove={context.removeItem.bind(null, item.id)}
    />
  ));
  return (
    <Modal onRemoveCart={props.onRemoveCart}>
      <div className={classes['cart-list']}>{list}</div>
      <div className={classes['total-price']}>
        <h1>Total:</h1>
        <p>${context.totalAmount.toFixed(2)}</p>
      </div>
      <div className={classes["button"]}>
        <button
          onClick={props.onRemoveCart}
          className={`${classes["btn"]} ${classes["order"]}`}
        >
          Order
        </button>
        <button
          onClick={props.onRemoveCart}
          className={`${classes["btn"]} ${classes["cancel"]}`}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};
export default CartList;
