import { useState,useEffect,useContext } from 'react';

import CartContext from '../../context/cart-context';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
    const context = useContext(CartContext);
    const [amination,setAnimation] = useState(false);
    const items = context.items;
    const totalItem = items.reduce((prev,curr)=>prev+curr.count,0);
    const buttonClass = `${classes['badge']} ${ amination ? classes['bump']:''}`;
    useEffect(()=>{
        setAnimation(true);
        const timer = setTimeout(()=>{
            setAnimation(false);
        },300);
        return ()=>{
            clearTimeout(timer);
        }
    },[items]);

    return (
        <button onClick={props.onShowCart} className={classes['button']}>
            <span className={classes['cart']}>Your Cart</span>
            <span className={buttonClass}>{totalItem}</span>
        </button>
    );
}
export default HeaderButton;