import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class criarListas extends Component {
  render() {
    return (
      <div>
        Página "Criar Listas"
        <button>
          <Link to="/listas" >Cancelar</Link>
        </button>
        <button>
          <Link to="/listas" >Criar Listas</Link>
        </button>
      </div>
    )
  }
}
