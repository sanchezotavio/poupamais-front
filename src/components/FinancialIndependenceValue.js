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
        timeMonth: 0,
        totalMonth: null
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

        axios.get(`http://localhost:5000/calc/financial-independence-value/${value}/${percentFinancialIndependenceValue}/${timeMonth}`, config)
            .then((res) => this.setState({ total: res.data },()=>{
                axios.get(`http://localhost:5000/calc/financial-independence-month/${res.data}/${percentFinancialIndependenceValue}/1`, config)
                .then((resMonth) => this.setState({ totalMonth: resMonth.data }))
            }))
            .catch((error) => {

               
               
            })
    }

    render() {


        const {
            total,
            value,
            percentFinancialIndependenceValue,
            timeMonth,
            totalMonth
        } = this.state



        return (
            <Paper style={{ padding: '20px' }} elevation={1}>

            <Typography variant="headline" style={{fontSize: '18px'}} component="h4">
                 Independecia financeira
                </Typography>
                <Typography variant="headline" component="h4">
                Quanto Preciso para obter minha independecia financeira?
            </Typography>
                <Grid container spacing={24}>
                    <Grid item md={4}>
                        <TextField
                            label="Valor que preciso por mês"
                            value={value}
                            onChange={this.handleChange('value')}
                            type="number"
                            margin="normal"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            label="Juros ao mês do meu investimento"
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
                          R$ {total}
                        </Typography>
                        <Typography sytyle={{ fontSize: '22px' }}>
                           Tempo para conquistar esse valor: {totalMonth} meses
                      </Typography>
                    </Grid>

                    <Grid item md={12}>
                        <Typography sytyle={{ fontSize: '22px' }}>
                            API Racket : {`http://localhost:4000/calc/financial-independence-value/${value}/${percentFinancialIndependenceValue}`}
                        </Typography>

                      
                       {
                           total !== null ? 
                           <Typography sytyle={{ fontSize: '22px' }}>
                            API Racket : {`http://localhost:4000/calc/financial-independence-month/${total}/${percentFinancialIndependenceValue}/1`}
                        </Typography> : ''
                       } 

                        
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