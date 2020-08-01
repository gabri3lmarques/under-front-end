import React from 'react';
import Carrinho from './components/carrinho/carrinho.component';
import { URI } from './env';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      cartItems: []
    }
  }

  componentDidMount() {
    fetch(URI)
    .then((response) => response.json())
    .then((response) => this.setState({cart: response, cartItems: response.items}));
  }
  
  render() {
    const { cartItems, cart } = this.state;
    return(
      <div>
         <Carrinho cartItems={cartItems} cart={cart } />
      </div>
    )
  }
}

export default App;
