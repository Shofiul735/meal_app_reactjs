import { Fragment } from "react";

import Header from './components/Header/Header';
import MealSummary from "./components/Meal/MealSummary";
import AllMeals from "./components/Meal/AllMeals";

const App = props =>{
  return( 
  <Fragment>
    <Header/>
    <MealSummary/>
    <AllMeals/>
  </Fragment>);
}
export default App;
