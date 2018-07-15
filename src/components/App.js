import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid';
import Header from '../common/Header'


class App extends Component {
    render() {
        return (
            <div>

                <Header />

                {this.props.children}

            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App