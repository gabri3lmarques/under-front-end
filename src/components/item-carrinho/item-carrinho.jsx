import React from 'react';
import './item-carrinho.style.css';

const ItemCarrinho = ({ item }) => {
  return (
    <div className="item-carrinho">
      <div className="item-header">
        <img src={item.product.imageObjects[0].medium} />
        <div className="title-description">
          <h4>{item.product.name.split(' ').slice(0, 4).join(' ')}</h4>
          <p>{item.product.name}</p>
          <p>Quantidade: <span className="qty">{item.quantity}</span></p>
          <p>de:  <span className="max-price">R$ {item.product.priceSpecification.maxPrice}</span></p>
          <p>por: <span className="price">R$ {item.product.priceSpecification.price}</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default ItemCarrinho;