import classes from './MealDetails.module.css';

const MealDetails = (props) => {
  return (
    <div className={classes['MealDetails']}>
      <div>
        <h2 className={classes['name']}>{props.name}</h2>
        <p className={classes['description']}>{props.description}</p>
        <strong className={classes['price']}>${props.price}</strong>
      </div>
      <div>
        <span className={classes['amount']}>Amount</span>
        <span className={classes['amount-number']}> 1</span>
        <button className={classes['button']}>+ Add</button>
      </div>
    </div>
  );
};
export default MealDetails;
