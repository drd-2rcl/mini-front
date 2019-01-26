import React, { Component } from 'react'
import styled from 'styled-components';

import camera from './assets/camera.png';
import Pattern from './assets/pattern.png';
import miniMarca from './assets/marca_mini_app.png';

const Container = styled.div`
background-image: url(${Pattern});
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
`;

const Box = styled.div`
background-color: #f2edc3;
width: 50%;
display: flex;
margin: 0 auto;
flex-direction: column;
height: auto;
align-items: center;
`;

const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`;

const ErrorMessage = styled.p`
margin: 0rem 0 0 .5rem;
color: #ff3333;
height: 1.5rem;
`;

const Row = styled.div`
flex-direction: row;
width: 100%;
`;

const Image = styled.image`
`;

export default class cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.validateEmail = (email) => {
      // eslint-disable-next-line
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const result = regex.test(email);
      if (!result) return false;
      return true;
    }

    this.handleSubmit = (e) => {
      e.preventDefault();
      const {name, email, password} = this.state;
      if (!name) {
        this.setState({ errorName: 'Campo Obrigatório'});
      }
      
      if (!email) {
        this.setState({ errorEmail: 'Favor informe um email válido' });
      }

      if (!password) {
        this.setState({ errorPassword: 'Campo Obrigatório'});
      }
    }
  }
  render() {
    return (
      {/* Página "Cadastro" */}
      <Container>
      <div>
        <img alt="Mini-Marca" src={miniMarca} />
      </div>
      <Box>
        <Row>
            <Image alt="seta" src="/assets/seta.png"/>
        </Row>
        <div>
            <img alt="camera" src={camera}/>
        </div>
        <h1>Criar Conta</h1>
        <div>
          <Input 
            id="name"
            placeholder="Nome"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <ErrorMessage>
            {this.state.errorName}
          </ErrorMessage>
          <Input 
            id="email"
            placeholder="Endereço de e-mail"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <ErrorMessage>
            {this.state.errorEmail}
          </ErrorMessage>
          <Input 
            id="password"
            placeholder="Senha"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
          <ErrorMessage>
            {this.state.errorPassword}
          </ErrorMessage>
        </div>
        <button onClick={this.handleSubmit}>Criar Conta</button>
      </Box>
    </Container>
    )
  }
}
