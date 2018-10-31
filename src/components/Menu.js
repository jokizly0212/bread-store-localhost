import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actChangeCartStatus } from './../actions/index';

class Menu extends Component {

    render() {
        var { changeCartStatus } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" ><img src="https://toppng.com/public/uploads/preview/beard-and-moustache-11530994991jpinloijci.png" alt="" />Bread</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" >Home
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick = {changeCartStatus}><i className="fas fa-shopping-cart" /></a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cartStatus: state.cartDisplay
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeCartStatus: () => {
            dispatch(actChangeCartStatus())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)