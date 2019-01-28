import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import secondImage from '../assets/marca_mini_app.png';
import firstImage from '../assets/img_responsive.png';
import pattern from '../assets/pattern.png';


const Container = styled.div`
background-image: url(${pattern});
height: 100vh;
width: 100%;
`;

const Section = styled.section`
background: rgba(243,236,214,0.6);
height: 100vh;
`;

const StyledBox = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
margin: 0 auto;
display: flex;
height: 85vh;
`;

const StyledImg = styled.img``;

const Row = styled.div`
margin: ${props => (props.bottom ? '20px 0 50px 0' : '20px 0')};
flex-direction: row;
`;

const Button = styled.button`
background-color: ${props => (props.sienna ? '#ef7735' : '#d3ce3d')};
align-items: center;
border-radius: 5px;
margin: 5px auto;
color: #fff;
width: 200px;
height: 40px;
border: none;
font-size: 1rem;
cursor: pointer;
`;

class Abertura extends Component {
  render() {
    return (
      <Container>
        <Section>
          <StyledBox>
            <Row>
              <StyledImg alt="" src={firstImage} />
            </Row>
            <Row bottom>
              <StyledImg alt="" src={secondImage}/>
            </Row>
            <Link to="/cadastro" >
              <Button sienna>Criar Conta</Button>
            </Link>
            <Link to="/login">
              <Button>Entrar</Button>
            </Link>
          </StyledBox>
        </Section>
      </Container>
    )
  }
}

export default Abertura;