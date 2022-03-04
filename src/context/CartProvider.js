import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const index = state.items.findIndex((item) => item.id === action.item.id);
    if (index !== -1) {
      const items = [...state.items];
      ++items[index]["count"];
      return {
        items: items,
        totalAmount: state.totalAmount + action.amount,
      };
    } else {
      const newItem = { ...action.item };
      newItem["count"] = 1;
      const newArray = state.items.concat(newItem);
      return {
        items: newArray,
        totalAmount: state.totalAmount + action.amount,
      };
    }
  } else if (action.type === "REMOVE") {
    const items = [...state.items];
    const index = items.findIndex((item) => item.id === action.removeID);
    if (index !== -1 && items[index].count > 1) {
      --items[index].count;
      return {
        items: items,
        totalAmount: state.totalAmount - items[index].price,
      };
    } else if (index !== -1 && items[index].count === 1) {
      const newItems = items.filter((item) => item.id !== action.removeID);
      return {
        items: newItems,
        totalAmount: state.totalAmount - items[index].price,
      };
    } else {
      return;
    }
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [state, cartReducerDispatch] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    cartReducerDispatch({
      type: "ADD",
      item: item,
      amount: item.price,
    });
  };

  const removeItemHandler = (id) => {
    cartReducerDispatch({
      type: "REMOVE",
      removeID: id,
    });
  };

  const value = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
export default CartProvider;
