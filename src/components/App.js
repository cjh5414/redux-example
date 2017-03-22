import React, { Component } from 'react';
import Counter from './Counter';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Counter />
        );
    }
}
