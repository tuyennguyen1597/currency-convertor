import React from "react";
import Grid from '@material-ui/core/Grid';
import ConverterImage from '../img/converter-icon.png'


const CurrencyConvertorHeader = () => {
    return (
        <Grid container
                direction="row"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <img className="card-media" src={ConverterImage} alt="Test" />
                </Grid>
                <Grid item>
                    <h1>Currency Transfer</h1>
                </Grid>
            </Grid>
    )
}

export default CurrencyConvertorHeader;