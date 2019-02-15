import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './container';
import { Input, Label } from './input';
import Button from './button';

const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100%;
        background: #000;
    `;

export default class Login extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <Label>Name</Label>
                    <Input />
                    <Label>Room</Label>
                    <Input />
                    <Button>Login</Button>
                </Container>
            </Wrapper>

        );
    }
}