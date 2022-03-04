import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import classes from './MealDetails.module.css';

const MealDetails = (props) => {
  const context = useContext(CartContext);

  const item = context.items.find((item)=>item.id === props.id);
  const count = item?item.count:0;

  return (
    <div className={classes['MealDetails']}>
      <div>
        <h2 className={classes['name']}>{props.name}</h2>
        <p className={classes['description']}>{props.description}</p>
        <strong className={classes['price']}>${props.price}</strong>
      </div>
      <div>
        <span className={classes['amount']}>Amount</span>
        <span className={classes['amount-number']}>{count}</span>
        <button onClick={()=>context.addItem({
          id:props.id,
          name:props.name,
          description:props.description,
          price:props.price,
        })} className={classes['button']}>+ Add</button>
      </div>
    </div>
  );
};
export default MealDetails;
