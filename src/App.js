import { Fragment } from "react";

import Header from './components/Header/Header';
import MealSummary from "./components/Meal/MealSummary";

const App = props =>{
  return( 
  <Fragment>
    <Header/>
    <MealSummary/>
  </Fragment>);
}
export default App;
