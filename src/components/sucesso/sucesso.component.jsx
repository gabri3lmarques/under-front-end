import React from 'react';
import success from '../../assets/success.svg';
import payment from '../../assets/credit-card.svg';
import cartShop from '../../assets/shopping-cart.svg';
import Header from '../header/header-component';
import fireworks from '../../assets/firework.svg';
import './sucesso.style.css';

const Sucesso = ({cart}) => {
  window.scrollTo(0, 0);
  return(
    <div className="sucesso container">
      <Header color="#9473ff" />
      <h3 className="session-title">Etapa 3 - Sucesso!</h3>
      <div className="etapas">
        <div className="etapa-1 active">
          <img src={cartShop} alt="Simbolo de um carrinho de compras - etapa1" />
        </div>
        <div className="caminho-1 active"></div>
        <div className="etapa-2 active">
          <img src={payment} alt="Simbolo de um cartão de crédito - etapa2" />
        </div>
        <div className="caminho-2 active"></div>
        <div className="etapa-3 active">
          <img src={success}  alt="Simbolo de um checklist etapa3" />
        </div>
      </div>
      <div className="success-icon">
        <img src={fireworks} />
      </div>
      <h3 className="success-title">Parabéns! <br /> Sua compra foi aprovada.</h3>
      <p>Você acabou de adquirir <span className="roxa">{cart.items ? cart.items.length : null}</span> items.</p>
      <p>O valor do frete é de: <span className="roxa">R$ {cart.shippingTotal}</span>.</p>
      <p>O subtotal da sua compra é de: <span className="roxa">R$ {cart.subTotal}</span>.</p>
      <p>Você teve um descontão: <span className="roxa">{cart.discount}%</span> :) .</p>
      <p>O valor totl de sua compra foi de:  <span className="roxa">R$ {cart.total}</span> .</p>
    </div>
  )
}

export default Sucesso;