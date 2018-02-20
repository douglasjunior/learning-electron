import React, { Component } from 'react';

export default class App extends Component {

    state = {};

    _onClick = () => {
        alert('clicked!');
    }

    render() {
        return (
            <div>
                <h2>Welcome to Electron and React!</h2>
                <button onClick={this._onClick}>Click Me</button>
            </div>
        );
    }

}
