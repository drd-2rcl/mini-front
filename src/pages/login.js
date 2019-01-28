import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import pattern from '../assets/pattern.png';
import miniMarca from '../assets/marca_mini_app.png';
import seta from '../assets/seta.png';

const Container = styled.div`
background-image: url(${pattern});
height: 100vh;
width: 100%;
`;

const Section = styled.section`
background: rgba(243,236,214,0.6);
flex-direction: column;
align-items: center;
display: flex;
height: 100vh;
`;

const StyledDiv = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
height: 90vh;
`;

const StyledBox = styled.div`
box-shadow: 0 7px 14px -7px black;
background: rgba(243,236,214);
flex-direction: column;
align-items: center;
border-radius: 7px;
margin: 0 auto;
display: flex;
height: 600px;
width: 600px;
`;

const Row = styled.div`
margin: ${props => (props.margin ? '20px 0' : '0')};
width: ${props => (props.start ? '100%' : 'none')} ;
flex-direction: row;
`;

const StyledImg = styled.img`
padding: ${props => (props.left ? '0 0 0 19px' : 'none')};
margin: 0;
`;

const Input = styled.input` 
margin: ${props => (props.top ? '20px 0 0 0' : '0')};
border: 1px solid #ccc;
box-sizing: border-box;
display: inline-block;
border-radius: 4px;
padding: 12px 10px;
font-size: .9rem;
width: 60%;
&::-webkit-input-placeholder {
    color: #545454;
  }
`;

const Button = styled.button`
background-color: ${props => (props.sienna ? '#ef7735' : '#d3ce3d')};
align-items: center;
border-radius: 5px;
margin: 5px auto;
font-size: 1rem;
cursor: pointer;
width: 200px;
height: 40px;
border: none;
color: #000;
`;

const H1 = styled.h1`
margin: 20px 0 20px 0;
font-weight: 100;
font-size: 2rem;
`;

const ErrorMessage = styled.p`
margin: 0rem 0 0 .5rem;
color: #ff3333;
height: 1.5rem;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = (e) => {
      e.preventDefault();
      const {name, email, password} = this.state;
      if (!name) {
        this.setState({ errorName: 'Campo obrigatório.'});
      }
      
      if (!email) {
        this.setState({ errorEmail: 'Por favor, informe um email válido.' });
      }

      if (!password) {
        this.setState({ errorPassword: 'Campo obrigatório.'});
      }
    }
  }  
  render() {
    return (
      <Container>
        <Section>
          <StyledDiv>
              <Row margin>
                <StyledImg alt="" src={miniMarca} />
              </Row>
            <StyledBox>
              <Row start margin>
                <Link to="/">
                  <StyledImg left alt="" src={seta}/>
                </Link>
              </Row>
              <H1>Entrar</H1>
              <Input 
                top
                id="name"
                type="text"
                placeholder="Nome"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
              <ErrorMessage>
                {this.state.errorName}
              </ErrorMessage>
              <Input 
                id="password"
                placeholder="Senha"
                type="password"
                value={this.state.password}
                onChange={event => this.setState({ password: event.target.value })}
              />
              <ErrorMessage>
                {this.state.errorPassword}
              </ErrorMessage>
              <Link to="/listas" >
                <Button onClick={this.handleSubmit}>Entrar</Button>
              </Link>
            </StyledBox>
          </StyledDiv>
        </Section>
      </Container>
    )
  }
}

export default Login;