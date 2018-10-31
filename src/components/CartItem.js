import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }
    

    render() {
        var { cart } = this.props;
        var { quantity } = cart.quantity > 0 ? cart : this.state;
        console.log(quantity);
        return (
            <div className="an-item mb-3">
                <div className="container">
                <div className="row">
                    <div className="col-2">
                    <img src={cart.product.image} alt={cart.product.product_name} />
                    </div>
                    <div className="col-5">
                    <div className="product-name">{cart.product.product_name}</div>
                    </div>
                    <div className="col-2">
                    <div className="btn btn-group">
                        <div className="btn btn-info" onClick = {()=>this.onUpdateQuantity(cart.product, cart.quantity - 1)}>-</div>
                        <p className="quantity">{quantity}</p>
                        <div className="btn btn-info" onClick = {()=>this.onUpdateQuantity(cart.product, cart.quantity + 1)} >+</div>
                    </div>
                    </div>
                    <div className="col-2 text-center">
                    <div className="price">$ {this.displayPrice(cart.product.price, cart.quantity)}</div>
                    </div>
                    <div className="col-1 text-center">
                        <i className="fas fa-window-close" onClick = {()=> this.onDelete(cart.product)} />
                    </div>
                </div>
                </div>
            </div>
        );
    }

    displayPrice = (price, quantity) => price * quantity;
    onDelete = (product) => {
        var {onDeleteProductInCart, onChangeMsg, onDisplayNotifier} = this.props;
        onDeleteProductInCart(product);
        onDisplayNotifier()
        onChangeMsg(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0) {
            this.setState({
                quantity: quantity
            });
            this.props.onUpdateProductInCart(product, quantity);
        }
    }

}

export default CartItem;