import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import miniMarca from '../assets/marca_mini_app.png';
import avatar from '../assets/avatar.png';


const Container = styled.div`
height: 100vh;
width: 100%;
flex-direction: column;
align-items: center;
display: flex;
`;

const Section = styled.section`
width: 100%;
margin: 20px 0;
max-width: 550px;
`;

const Header = styled.div`
background-color: #574437;
height: auto;
width: 100%;
`;

const Row = styled.div`
justify-content: ${props => (props.around ? 'space-around' : 'center')};
margin: ${props => (props.margin ? '20px 0' : '0')};
width: ${props => (props.start ? '100%' : 'auto')} ;
flex-direction: row;
align-items: center;
display: flex;
height: 10vh;
/* max-width: ${props => (props.max ? '85%' : 'none')}; */
`;

const H1 = styled.h1`
margin: 5px 0;
font-weight: 100;
font-size: 1.2rem;
`;

const Input = styled.input` 
margin: ${props => (props.top ? '10px 0 0 0' : '0')};
border: 1px solid #ccc;
box-sizing: border-box;
display: inline-block;
border-color: #60b999;
border-radius: 4px;
padding: 12px 10px;
font-size: .9rem;
width: 100%;
&::-webkit-input-placeholder {
    color: #545454;
  }
`;

const Button = styled.button`
background-color: ${props => (props.sienna ? '#ef7735' : '#d3ce3d')};
color: ${props => (props.white ? '#fff' : '#000')};
align-items: center;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
width: 200px;
height: 40px;
border: none;
margin: 5px;
`;

const StyledImg = styled.img`
padding: ${props => (props.left ? '0 0 0 19px' : 'none')};
margin: 0;
`;

export default class listas extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Row around >
            <StyledImg alt="" src={miniMarca} />
            <StyledImg alt="" src={avatar} />
          </Row>
        </Header>
        <Section>
          <H1>Listas</H1>
          <Input
            type="text"
            placeholder="Lista 1" />
          <Row margin start>
            <Link to="/listas" >
              <Button >Cancelar</Button>
            </Link>
            <Link to="/criar-listas" >
              <Button white sienna>Criar Lista
              </Button>
            </Link>
          </Row>
        </Section>
      </Container>
    )
  }
}
