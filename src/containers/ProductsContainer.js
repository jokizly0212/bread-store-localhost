import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage, actDisplayNotifier } from './../actions/index';

class ProductsContainer extends Component {

    render() {
        var { products } = this.props
        return (
            <Products displayProducts = {this.displayProducts(products)} />               
        );
    }

    displayProducts = (products) => {
        var result = null;
        var {onAddToCart, onChangeMsg, onDisplayNotifier} = this.props;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem 
                            key={index} 
                            product={product}
                            onAddToCart = {onAddToCart}
                            onChangeMsg = {onChangeMsg}
                            onDisplayNotifier = {onDisplayNotifier}
                        />
            })
        }
        return result;
    }
}   

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            product_name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    
    onChangeMsg: PropTypes.func.isRequired,
    onDisplayNotifier: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        displayNotifier: state.displayNotifier
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMsg: (message) => {
            dispatch(actChangeMessage(message))
        },
        onDisplayNotifier: () => {
            dispatch(actDisplayNotifier())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)