import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import Login from './components/login-page/login';

const socket = io();

class App extends Component {

    componentDidMount() {
        socket.on('connect', () => {
            console.log('Connected to server');
            socket.emit('join', { name: 'Alex', age: 32 })
        });
    }

    render() {
        return (
            <div className="App">
                <Login />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));