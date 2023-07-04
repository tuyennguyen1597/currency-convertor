import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import ConverterImage from '../img/converter-icon.png';
import Select from '@material-ui/core/Select';
import SwitchImage from '../img/converter-swap-icon.png'
import CurrencyConvertorGrid from "./CurrencySelection";
import CurrencyConvertorHeader from "./CurrencyConvertorHeader";

const Convertor = () => {
    return (
        <Card className="card" >
            <CurrencyConvertorHeader/>
            <CurrencyConvertorGrid/>
            <Grid container justifyContent="center">
            <img className="switch-button" src={SwitchImage} alt="" />
            </Grid>
            <CurrencyConvertorGrid/>
        </Card>
    )
}

export default Convertor;