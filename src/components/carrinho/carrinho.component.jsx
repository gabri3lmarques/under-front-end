import React from 'react';
import Header from '../header/header-component';
import ItemCarrinho from '../item-carrinho/item-carrinho';
import user from '../../assets/profile.png';
import success from '../../assets/success.svg';
import payment from '../../assets/credit-card.svg';
import cartShop from '../../assets/shopping-cart.svg';
import './carrinho.style.css';

const Carrinho = ({ cartItems, cart }) => {
  console.log(cart)
  return (
    <div className="carrinho container">
      <Header color="#9473ff" />
      
      <div className="user">
        <img src={user} className="user-profile" />
        <p>Olá, <b>@usuário!</b> <br /> Confira abaixo os items em seu carrinho.</p>
      </div>

      <h3 className="session-title">Etapa 1 - Checkout</h3>

      <div className="etapas">
        <div className="etapa-1 active">
          <img src={cartShop} />
        </div>
        <div className="caminho-1 active"></div>
        <div className="etapa-2 active">
          <img src={payment} />
        </div>
        <div className="caminho-2"></div>
        <div className="etapa-3">
          <img src={success} />
        </div>
      </div>
      <p>Você possui um total de <span class="total-items">{cart.items ? cart.items.length : null}</span> items em seu carrinho.</p>
      <div className="lista-items">
        {
          cartItems.map((item, index) => (
              <ItemCarrinho item={item}  key={index} />
            )
          )
        }
      </div>
    </div>
  )
}

export default Carrinho;