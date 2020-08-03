import React from 'react';
import Header from '../header/header-component';
import success from '../../assets/success.svg';
import payment from '../../assets/credit-card.svg';
import cartShop from '../../assets/shopping-cart.svg';
import mastercard from '../../assets/mastercard.svg';
import back from '../../assets/left-arrow.svg';
import Botao from '../../components/botao/botao.component';
import SweetAlert from 'sweetalert2-react'
import ReactDOM from "react-dom";
import { Link }from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import './pagamento.style.css';

class Pagamento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroCartao: "1234567889101112",
      nomeCartao: "Nome Sobrenome",
      dataCartao : '1234',
      show: false,
      message: ''
    }

  }

  finalizar = () => {
      const node = ReactDOM.findDOMNode(this);
      const numeroCartao = node.querySelector('.numero-cartao-input').value;
      const nomeCartao = node.querySelector('.nome-cartao-input').value;
      const dataCartao = node.querySelector('.data-cartao-input').value;
      const cvvCartao = node.querySelector('.cvv-cartao-input').value;
      
      if(numeroCartao == "" || isNaN(numeroCartao) || numeroCartao.length < 16)  {
        this.setState({ show: true });
        this.setState({ message: 'Por favor, verifique o número do cartão' });
      }
      else if (nomeCartao == "") {
        this.setState({ show: true });
        this.setState({ message: 'Por favor, verifique o nome do cartão' });
      }
      else if (numeroCartao == "" || isNaN(dataCartao) || dataCartao.length < 4 ){
        this.setState({ show: true });
        this.setState({ message: 'Por favor, verifique a data de validade do cartão' });
      }
      else if (cvvCartao == "" || isNaN(cvvCartao) || cvvCartao.length < 3) {
        this.setState({ show: true });
        this.setState({ message: 'Por favor, verifique o cvv do cartão' });
      }
      else {
          this.props.history.push('/sucesso');
      }
  }

  searchByName = (e, el)  => {
    this.setState({[el]: e.target.value });
  };

  render() {
    window.scrollTo(0, 0);
    return (
      <div className="pagamento container">
        <Link to="/">
          <img src={back} className="voltar" />
        </Link>
        <Header color="#fff" />

        <h3 className="session-title" style={{color: '#fff'}}>Etapa 2 - Pagamento</h3>

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

        <p>Detalhes do cartão: </p>

        <div className="cartao">
          <div className="bandeira"><img src={mastercard} /></div>
          <p className="numero-cartao">{this.state.numeroCartao.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}</p>
          <p className="nome-cartao">{this.state.nomeCartao}</p>
          <p className="data-cartao">{this.state.dataCartao.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim().slice(0,5)}</p>
        </div>

        <div className="dados-pagamento">
          <form>
            <div className="row">
              <div class="col-md-6">
                <div class="label">
                  Número do cartão
                </div>
                <input type="text" className="numero-cartao-input" maxLength="16" onChange={ (e) => this.searchByName(e, 'numeroCartao')} placeholder="1234 5678 ..." />
              </div>

              <div class="col-md-6">
                <div class="label">
                  Nome do cartão
                </div>
                <input type="text" className="nome-cartao-input" onChange={ (e) => this.searchByName(e, 'nomeCartao')}  placeholder="1234 5678 ..." />
              </div>
            </div>
            <div className="row">
              <div class="col-md-6">
                <div class="label">
                  Data de expiração
                </div>
                <input type="text" className="data-cartao-input" placeholder="ex:. 1234" maxLength="4" onChange={ (e) => this.searchByName(e, 'dataCartao')}   />
              </div>

              <div class="col-md-6">
                <div class="label">
                  CVV
                </div>
                <input type="text" className="cvv-cartao-input" maxLength="3" placeholder="ex: 123" />
              </div>
            </div>
          </form>

          <Botao text="finalizar compra" method={this.finalizar} />
        </div>

        <SweetAlert
        show={this.state.show}
        title="Atenção"
        confirmButtonColor="#9475ff"
        text={this.state.message}
        onConfirm={() => this.setState({ show: false })}
      />
      </div>
    )
  }
}

export default withRouter(Pagamento);