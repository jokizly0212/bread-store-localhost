import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './../components/CartItem';
import Checkout from './../components/Checkout';
import * as Message from './../constants/Message';
import CartTotal from './../components/CartTotal';
import { actChangeCartStatus, actDeleteProductInCart, actChangeMessage, actDisplayNotifier, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {

    render() {
        return (
            <div>
            {this.displayCheckout()}
            </div>
        );
    }

    displayCheckout = () => {
        if(this.props.cartStatus.isCartDisplay === true) {
            return (
                <Checkout 
                    displayCart = {this.displayCart(this.props.cart)} 
                    totalPrice = {this.displayTotal(this.props.cart)}
                    changeCartStatus = {()=>this.props.changeCartStatus()}
                />    
            )
        }
    }
    
    displayCart = (cart) => {
        var result = Message.MSG_CART_EMPTY;
        var {onDeleteProductInCart, onChangeMsg, onDisplayNotifier, onUpdateProductInCart} = this.props;
        if(cart.length > 0) {
            result = cart.map((cart, index) => {
                return <CartItem 
                            key = {index} 
                            cart={cart} 
                            index = {index}
                            onDeleteProductInCart = {onDeleteProductInCart}
                            onChangeMsg = {onChangeMsg}
                            onDisplayNotifier = {onDisplayNotifier}
                            onUpdateProductInCart = {onUpdateProductInCart}
                        />
            })
        }
        return result;
    }
    displayTotal = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = <CartTotal cart={cart}/>
        }
        return result;
    }
}   

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            product_name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    }) 
    ).isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        cartStatus: state.cartDisplay
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeCartStatus: () => {
            dispatch(actChangeCartStatus())
        },
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMsg: (message) => {
            dispatch(actChangeMessage(message))
        },
        onDisplayNotifier: () => {
            dispatch(actDisplayNotifier())
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);