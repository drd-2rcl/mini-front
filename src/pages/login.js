import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class login extends Component {
  render() {
    return (
      <div>
        Página "Login"
        <button>
          <Link to="/listas">Entrar</Link>
        </button>
      </div>
    )
  }
}
