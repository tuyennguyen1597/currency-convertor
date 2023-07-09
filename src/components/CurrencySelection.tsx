import React, { useState } from 'react';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

interface CurrencySelection {
    title: string,
    currencies: string[],
    selectedCurrency: string,
    onCurrencyChange: (newCurrency: string) => void,
    disabled: boolean,
    inputValue: number,
    onInputChange: (newInputValue: number) => void,
}

const CurrencySelection: React.FC<CurrencySelection> = ({ title, currencies, selectedCurrency, onCurrencyChange, disabled, inputValue, onInputChange }) => {

    const handleCurrencyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newCurrency = event.target.value as string;
        onCurrencyChange(newCurrency)
    }
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newInputValue = parseFloat(event.target.value);
        onInputChange(newInputValue);
      };

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
                    <Select className="select-currency input-text" native value={selectedCurrency} onChange={handleCurrencyChange}>
                        {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </Select>
                </Grid>

                <Grid item>
                    <p className='seperator'>|</p>
                </Grid>

                <Grid item>
                    <TextField className='input-item' 
                    id='standard-basic' 
                    type='number' 
                    disabled={disabled}
                    value={inputValue}
                    onChange={handleInputChange} />
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default CurrencySelection