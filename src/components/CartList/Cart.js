

import classes from "./Cart.module.css";



const Cart = (props) => {
  return (
    <div className={classes['cart']}>
      <div>
        <h1 className={classes['name']}>{props.name}</h1>
        <h2 className={classes['price']}>${props.price}</h2>
        <span className={classes['count']}>x{props.count}</span>
      </div>
      <div>
        <button onClick={props.onAdd} className={`${classes['btn']} ${classes['add']}`}>+</button>
        <button onClick={props.onRemove} className={`${classes['btn']} ${classes['remove']}`}>-</button>
      </div>
    </div>
  );
};
export default Cart;
