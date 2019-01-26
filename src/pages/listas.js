import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class listas extends Component {
  render() {
    return (
      <div>
        Página "Listas"
        <button>
          <Link to="/criarListas" >Ícone - Criar Lista</Link>
        </button>
      </div>
    )
  }
}
