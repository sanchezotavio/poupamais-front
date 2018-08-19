import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import Header from '../common/Header'
import AppBar from '@material-ui/core/Grid'

class App extends Component {
    render() {
        return (
            <div style={{width: '100%'}}>


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