import React from 'react';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

interface CurrencySelection {
    title: string,
    currencies: string[]
}

const CurrencySelection: React.FC<CurrencySelection> = ({ title, currencies }) => {
    return (
        <CardContent className="card-content">
            <p className="title">{title}</p>
            <Grid container
                direction="row"
                justifyContent="space-around"
                alignContent="center"
                alignItems="flex-start"
                className='card-item'
            >
                <Grid item>
                    <Select className="select-currency input-text" native>
                        {currencies.map(currency => <option>{currency}</option>)}
                    </Select>
                </Grid>

                <Grid item>
                    <p className='seperator'>|</p>
                </Grid>

                <Grid item>
                    <TextField className='input-item' id='standard-basic' />
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default CurrencySelection