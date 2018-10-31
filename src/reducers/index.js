import products from './Products';
import {combineReducers} from 'redux';
import cart from './Cart';
import cartDisplay from './displayCart';
import message from './changeMsg';
import notifier from './displayNotifier';
const appReducers  = combineReducers({
    products,
    cartDisplay,
    cart,
    message,
    notifier
});

export default appReducers;

