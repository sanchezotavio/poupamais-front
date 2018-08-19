import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router'

import { Grid } from '@material-ui/core'

import Interest from '../../components/Interest'

import InterestTime from '../../components/InterestTime'

import FinancingValueMonth from '../../components/FinancingValueMonth'

import FinancialIndependenceValue from '../../components/FinancialIndependenceValue'

import InterestTotal from '../../components/InterestTotal'


class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Interest />
                        </Grid>
                        <Grid item xs={12}>
                            <InterestTotal />
                        </Grid>
                        <Grid item xs={12}>
                            <InterestTime />
                        </Grid>
                        <Grid item xs={12}>
                            <FinancingValueMonth />
                        </Grid>
                        <Grid item xs={12}>
                            <FinancialIndependenceValue />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default index;