import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router'

import {Grid} from '@material-ui/core'

import FinancialIndependence  from '../../components/FinancialIndependence'

class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                   <FinancialIndependence />
                </Grid>
            </Grid>
        );
    }
}

export default index;