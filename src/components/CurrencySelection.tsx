import React from "react";
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';


const CurrencyConvertorGrid = () => {
    return (
        <CardContent className="card-content">
                <p className="title">From</p>
                <Grid container
                    direction="row"
                    justifyContent="space-around"
                    alignContent="center"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Select className="select-currency" native>
                            <option>AUD</option>
                            <option>USD</option>
                            <option>VND</option>
                        </Select>
                    </Grid>
                    <Grid item>
                        <p>|</p>
                    </Grid>
                    <Grid item>
                        <Select className="select-currency" native>
                            <option>AUD</option>
                            <option>USD</option>
                            <option>VND</option>
                        </Select>
                    </Grid>
                </Grid>
            </CardContent>
    )
}

export default CurrencyConvertorGrid