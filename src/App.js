import CartProvider from "./context/CartProvider";
import Header from './components/Header/Header';
import MealSummary from "./components/Meal/MealSummary";
import AllMeals from "./components/Meal/AllMeals";

const App = props =>{
  return( 
  <CartProvider>
    <Header/>
    <MealSummary/>
    <AllMeals/>
  </CartProvider>);
}
export default App;
