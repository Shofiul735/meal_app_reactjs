
import classes from './Header.module.css';

const Header = (props) =>{
    return(
        <header className={classes['header']}>
            <h1 className={classes['logo']}>Meals</h1>
            <button>Cart</button>
        </header>
    );
}
export default Header;