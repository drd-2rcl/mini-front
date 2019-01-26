import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Abertura extends Component {
  render() {
    return (
      <div>
        Pagina "Abertura"
        <button>
          <Link to="/cadastro" >Criar Conta</Link>
        </button>
        <button>
          <Link to="/login" >Entrar</Link>
        </button>
      </div>
    )
  }
}

export default Abertura;


// definir theme.js
// inserir logout
// inserir botão cancelar na página de cadastro -> voltar p/ login