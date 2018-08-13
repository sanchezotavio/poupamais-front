import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class FinancialIndependence extends Component {

    state = {
        investmentTotal: null,
        investmentYears: null,
        investmentMounth: null,
        percent: null,
        profitability: null,
        total: null
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onCalculateClick(){
        axios.get('localhost:5000/')
        .then(function (response) {
            console.log(response);
        })
    }

    render() {


        const {
            investmentTotal,
            investmentYears,
            investmentMounth,
            percent,
            profitability,
            total
        } = this.state

      

        return (
            <Paper elevation={1}>

                <Typography variant="headline" component="h3">
                    Simulador de Independência Financeira
                </Typography>
                <Typography component="p">
                    Saiba quanto você deve investir todos os meses para atingir a sua independência financeira nos próximos anos e poder viver de renda.
                </Typography>
                <Grid container spacing={8}>
                    <Grid item md={6}>
                        <TextField
                            label="Number"
                            value={investmentTotal}
                            onChange={this.handleChange('investmentTotal')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Number"
                            value={investmentYears}
                            onChange={this.handleChange('investmentYears')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Number"
                            value={investmentYears}
                            onChange={this.handleChange('investmentMounth')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Number"
                            value={percent}
                            onChange={this.handleChange('percent')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Number"
                            value={profitability}
                            onChange={this.handleChange('profitability')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Number"
                            value={total}
                            onChange={this.handleChange('total')}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Button variant="contained" color="primary" onClick={
                            this.onCalculateClick.bind(this)
                        } >
                            Calcular
                            </Button>
                    </Grid>


                </Grid>
            </Paper>
        )
    }
}

FinancialIndependence.propTypes = {
    children: PropTypes.object.isRequired
};

export default FinancialIndependence