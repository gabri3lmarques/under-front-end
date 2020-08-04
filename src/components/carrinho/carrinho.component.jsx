import React from 'react';
import Header from '../header/header-component';
import ItemCarrinho from '../item-carrinho/item-carrinho';
import user from '../../assets/profile.png';
import success from '../../assets/success.svg';
import payment from '../../assets/credit-card.svg';
import cartShop from '../../assets/shopping-cart.svg';
import Botao from '../../components/botao/botao.component';
import { Link } from 'react-router-dom';
import './carrinho.style.css';

const Carrinho = ({ cartItems, cart }) => {
  
  

  return (
    <div className="carrinho container">
      <Header color="#9473ff" />
      
      <div className="user">
        <img src={user} alt="imagem do perfil do usuario" className="user-profile" />
        <p>Olá, <b>@usuário!</b> <br /> Confira abaixo os items em seu carrinho.</p>
      </div>

      <h3 className="session-title">Etapa 1 - Checkout</h3>

      <div className="etapas">
        <div className="etapa-1 active">
          <img src={cartShop} alt="Simbolo de um carrinho de compras - etapa1" />
        </div>
        <div className="caminho-1"></div>
        <div className="etapa-2">
          <img src={payment} alt="Simbolo de um cartão de crédito - etapa2" />
        </div>
        <div className="caminho-2"></div>
        <div className="etapa-3">
          <img src={success}  alt="Simbolo de um checklist etapa3" />
        </div>
      </div>

      <p>Você possui um total de <span className="total-items">{cart.items ? cart.items.length : null}</span> items em seu carrinho.</p>
      <div className="lista-items">
        {
          cartItems.map((item, index) => (
              <ItemCarrinho item={item}  key={index} />
            )
          )
        }
      </div>
      <p className="sub-info">Frete: <span>R$ {cart.shippingTotal}</span></p>
      <p className="sub-info">Subtotal: <span>R$ {cart.subTotal}</span></p>
      <p className="sub-info">desconto: <span>{cart.discount}%</span></p>
      <p className="total-compra">Valor total:  <span>R$ {cart.total}</span></p>
      <Link to="/pagamento">
        <Botao text="comprar"/>
      </Link>
    </div>
  )
}

export default Carrinho;