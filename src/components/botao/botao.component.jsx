import React from 'react';
import './botao.style.css';

const Botao = ({text, method}) => {
  return (
    <button onClick={method}>
      {text}
    </button>
  )
}

export default Botao;