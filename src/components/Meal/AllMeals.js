import Card from "../UI/Card/Card";
import MealDetails from "./MealDetails";
import classes from "./AllMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AllMeals = (props) => {
  return (
    <div className={classes["all-meals"]}>
      <ul className={classes["unorder-list"]}>
        {DUMMY_MEALS.map((item) => {
          return (
            <li key={item.id}>
              <Card>
                <MealDetails
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AllMeals;
