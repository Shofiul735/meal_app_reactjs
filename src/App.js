import { useState } from "react";

import CartProvider from "./context/CartProvider";
import Header from './components/Header/Header';
import MealSummary from "./components/Meal/MealSummary";
import AllMeals from "./components/Meal/AllMeals";
import CartList from './components/CartList/CartList';


const App = props =>{
  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const removeCartHandler = () => {
    setShowCart(false);
  }

  return( 
  <CartProvider>
    {showCart && <CartList onShowCart={showCartHandler} onRemoveCart={removeCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <MealSummary/>
    <AllMeals/>
  </CartProvider>);
}
export default App;
