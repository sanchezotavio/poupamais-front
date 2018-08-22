import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'

class InterestTime extends Component {


    state = {

        total: null,
        value: 0,
        percentInterestTime: 0,
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
            percentInterestTime,
            timeMonth
        } = this.state

        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };

        axios.get(`http://localhost:5000/calc/interest-time/${value}/${percentInterestTime}/${timeMonth}`, config)
        .then((res) => this.setState({total: res.data}))
        .catch((error) => {
                console.log(error)
            })
    }

    render() {


        const {
            total,
            value,
            percentInterestTime,
            timeMonth
        } = this.state



        return (
            <Paper style={{ padding: '20px' }} elevation={1}>

                  <Typography variant="headline" style={{fontSize: '18px'}} component="h4">
                    Investimento - Tempo para conseguir um determinado valor 
                </Typography>
                <Typography variant="headline" style={{fontSize: '16px'}} component="p">
                   Quantos meses de investimento vou demorar para conseguir um determinado valor, através dos juros?      
                </Typography>
                <Grid container spacing={24}>
                    <Grid item md={4}>
                        <TextField
                            label="Montante Inicial"
                            value={value}
                            onChange={this.handleChange('value')}
                            type="number"
                            margin="normal"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            label="Quanto de juros ao mês?"
                            value={percentInterestTime}
                            onChange={this.handleChange('percentInterestTime')}
                            type="number"
                            margin="normal"
                            fullWidth={true}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">%</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            label="Qual o valor final que você deseja possuir?"
                            value={timeMonth}
                            onChange={this.handleChange('timeMonth')}
                            type="number"
                            margin="normal"
                            fullWidth={true}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }}
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
                             {total} Meses
                        </Typography>
                    </Grid>

                     <Grid item md={12}>
                    <Typography sytyle={{ fontSize: '22px' }}>
                        API Racket : { `http://localhost:4000/calc/interest-time/${value}/${percentInterestTime}/${timeMonth}`}
                    </Typography>
                </Grid>
                   

                </Grid>
            </Paper>
        )
    }
}

InterestTime.propTypes = {
    children: PropTypes.object.isRequired
};

export default InterestTime