import CartProvider from "./context/CartProvider";
import Header from './components/Header/Header';
import MealSummary from "./components/Meal/MealSummary";
import AllMeals from "./components/Meal/AllMeals";
import Modal from './components/UI/Modal/Modal';
import { Fragment } from "react/cjs/react.production.min";


const App = props =>{
  return( 
    <Fragment>
      <Modal/>
  <CartProvider>
    <Header/>
    <MealSummary/>
    <AllMeals/>
  </CartProvider>
  </Fragment>);
}
export default App;
