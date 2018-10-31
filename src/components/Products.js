import React, { Component } from 'react';

class Products extends Component {

    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    {this.props.displayProducts}
                </div>
            </div>
        );
    }
}

export default Products;