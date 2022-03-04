import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultState = {
    item=[],
    totalAmount:0,
}

const cartReducer = (state,action) => {
    return defaultState;
}

const CartProvider = (props) => {
  const [state,cartDispatcher] = useReducer(cartReducer,defaultState);

  const addItemHandler = (item) => {

  };
  const removeItemHandler = (id) => {
      
  };

  const value = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
