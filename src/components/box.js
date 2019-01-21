import React from 'react';
// import styled from 'styled-components';

import camera from '../assets/camera.png';
import Input from '../components/input';
import seta from '../assets/seta.png'
import Col from '../components/Col';
import Button from '../components/button';

// const Container = styled.div`
// max-width: 500px;
// background-color: black;
// `;

const Box = () => (
    <Col>
        <div>
            <img alt="seta" src={seta}/>
        </div>
        <div>
            <img alt="camera" src={camera}/>
        </div>
        <h1>Criar Conta</h1>
        <Input />
        <Input />
        <Input />
        <Button />
    </Col>
);


export default Box;
