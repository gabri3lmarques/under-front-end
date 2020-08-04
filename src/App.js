import React from 'react';
import Carrinho from './components/carrinho/carrinho.component';
import Pagamento from './components/pagamento/pagamento.component';
import Sucesso from './components/sucesso/sucesso.component';
import { URI } from './env';
import { Route } from 'react-router-dom';
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
      <React.Fragment>
        <Route exact path="/">
          <Carrinho cartItems= {cartItems } cart={ cart } />
        </Route>
        <Route exact path="/pagamento">
          <Pagamento />
        </Route>
        <Route exact path="/sucesso">
          <Sucesso cart={ cart} />
        </Route>
      </React.Fragment>
    )
  }
}

export default App;
