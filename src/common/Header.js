import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'

class Header extends Component {
    render() {
        return (
           <AppBar style={{padding:'10px 5px'}} position="static">
               Poupa Mais
           </AppBar>
        );
    }
}


export default Header;