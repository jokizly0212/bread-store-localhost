import React, { Component } from 'react';
class Checkout extends Component {
    
    render() {
        var {changeCartStatus} = this.props;
        return (
            <div>
                <div className="background"></div>
                <i className="fas fa-times-circle" onClick = {changeCartStatus}/>
                    <section className="shopping-cart">
                        <div className="logo">
                            <img src="https://toppng.com/public/uploads/preview/beard-and-moustache-11530994991jpinloijci.png" alt=""/>  
                        </div>
                        <div className="checkout">RECENTLY ADDED</div>
                        <div className="cart-items">
                            {this.props.displayCart}
                        </div>
                            {this.props.totalPrice}
                            <div className="buttons-checkout">
                            <div className="btn btn-light btn-card">Pay with <img src="http://pngimg.com/uploads/visa/visa_PNG17.png" alt="" /></div>
                            <div className="btn btn-light btn-paypal">Pay with <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2000px-PayPal_logo.svg.png" alt="" /></div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default Checkout;