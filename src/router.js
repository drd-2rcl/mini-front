import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'

import CriarListas from "./pages/criarListas";
import Abertura from "./pages/abertura";
import Cadastro from "./pages/cadastro";
import Listas from "./pages/listas";
import Login from "./pages/login";
import Error from './pages/error';


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
              <Route exact path="/" component={Abertura} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/login" component={Login} />
              <Route path="/listas" component={Listas} />
              <Route path="/criar-listas" component={CriarListas} />
              <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
