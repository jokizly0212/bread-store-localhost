import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        var {cart} = this.props;
        return (
            <div className="check-out mt-5">
                <div className="container">
                    <div className="row text-right">
                    <div className="col-9">Total:</div>
                    <div className="col-3 text-left">$ {this.displayTotal(cart)}</div>
                    </div>
                </div>
            </div>
        );
    }
    displayTotal = (cart) => {
        var total = 0;
        if(cart.length > 0) {
            for(var i = 0; i< cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }
}

export default CartTotal;