import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MsgContainer from './containers/MsgContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <MsgContainer/>
        <Menu/>
        <Header/>
        <ProductsContainer/>
        <CartContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;