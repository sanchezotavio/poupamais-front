import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class FinancialIndependenceValue extends Component {

    state = {
        total: null,
        value: 0,
        percentFinancialIndependenceValue: 0,
        timeMonth: 0
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onCalculateClick() {
        const {
            value,
            percentFinancialIndependenceValue,
            timeMonth
        } = this.state

        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };

        axios.get(`http://CPX-PHM8CKZIASX:5000/calc/financial-independence-value/${value}/${percentFinancialIndependenceValue}/${timeMonth}`, config)
            .then((res) => this.setState({ total: res.data }))
            .catch((error) => {
                console.log(error)
            })
    }

    render() {


        const {
            total,
            value,
            percentFinancialIndependenceValue,
            timeMonth
        } = this.state



        return (
            <Paper style={{ padding: '20px' }} elevation={1}>

                <Typography variant="headline" component="h4">
                    Se você juntar dinheiro sem levar aproveitas os juros, quanto você vai ter depois de um período?
            </Typography>
                <Grid container spacing={24}>
                    <Grid item md={4}>
                        <TextField
                            label="Valor mensal a ser aplicado"
                            value={value}
                            onChange={this.handleChange('value')}
                            type="number"
                            margin="normal"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            label="Quanto de juros ao mês?"
                            value={percentFinancialIndependenceValue}
                            onChange={this.handleChange('percentFinancialIndependenceValue')}
                            type="number"
                            margin="normal"
                            fullWidth={true}
                        />
                    </Grid>
                 

                    <Grid item md={12}>
                        <Button variant="contained" color="primary" onClick={
                            this.onCalculateClick.bind(this)
                        } >
                            Calcular
                        </Button>
                    </Grid>

                    <Grid item md={12}>
                        <Typography sytyle={{ fontSize: '22px' }}>
                            Meses {total}
                        </Typography>
                    </Grid>

                    <Grid item md={12}>
                        <Typography sytyle={{ fontSize: '22px' }}>
                            API Racket : {`http://localhost:4000/calc/financial-independence-value/${value}/${percentFinancialIndependenceValue}`}
                        </Typography>
                    </Grid>

                </Grid>
            </Paper>
        )
    }
}

FinancialIndependenceValue.propTypes = {
    children: PropTypes.object.isRequired
};

export default FinancialIndependenceValue