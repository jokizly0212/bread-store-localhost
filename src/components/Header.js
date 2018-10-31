import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron header text-center">
                <div className="bg" />
                <div className="header-text">
                <h1 className="display-3">Get Your Own Bread</h1>
                <p className="lead display-4">Special Offer Today</p>
                </div>
            </div>
        );
    }
}

export default Header;