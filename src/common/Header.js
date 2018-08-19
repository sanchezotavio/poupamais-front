import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'

import Typography from '@material-ui/core/Typography'

class Header extends Component {
    render() {
        return (
           <AppBar style={{padding:'10px 5px', marginBottom: '20px'}} position="static">
              <Typography style={{color: '#fff', fontSize: '18px'}}> Poupa Mais </Typography>
           </AppBar>
        );
    }
}


export default Header;