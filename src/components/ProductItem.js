import React, { Component } from 'react';
import * as Message from './../constants/Message';

class ProductItem extends Component {

    displayRatings = (rating) => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fas fa-star"/>)               
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i key={i+j} className="far fa-star"/>)
        }
        return result;
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onDisplayNotifier();
        this.props.onChangeMsg(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    
    render() {
        var {product} = this.props;
        return (
                <div className="col-3 mb-5">
                    <div className="card">
                    <img className="card-img-top" src={product.image} alt={product.product_name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.product_name}</h4>
                        <div className="card-text">
                        <ul className="rating">
                            <li style={{listStyle: 'none' }}>
                                {this.displayRatings(product.rating)}
                            </li>
                            
                        </ul>
                        <span className="badge badge-success">$ {product.price}</span>
                        <hr/>
                        <div className="icons">
                            <i className="fas fa-shopping-cart" onClick = {()=>this.onAddToCart(product)} />
                            <i className="fas fa-heart" />
                            <a className="detail" >Check it out <i className="fas fa-chevron-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default ProductItem;