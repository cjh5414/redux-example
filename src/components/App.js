import React, { Component, PropTypes } from 'react';
import Counter from './Counter';

const propTypes = {

};


const defaultProps = {

};

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

App.propTypes = propTypes;
App.defaultProps = defaultProps;
