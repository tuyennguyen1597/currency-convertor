// import Card from '@material-ui/core/Card';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import Form from '@material-ui/core/Form';
import { Card, Container, Grid, Button } from '@material-ui/core';
import SwitchImage from '../img/converter-swap-icon.png'
import { useAction } from '../hook/useActions';

import CurrencyConvertorHeader from "./CurrencyConvertorHeader";
import CurrencySelection from './CurrencySelection';
import { useTypedSelector } from '../hook/useTypeSelector';
import { Fragment, useEffect, useState } from 'react';
// import Button from '@material-ui/core/Button';

const Convertor = () => {
    const formStyle = {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        minWidth: '700px'
    };
    const [currencies, setCurrencies] = useState<string[]>(['USD', 'AUD']);
    const [fromCurrency, setFromCurrency] = useState('AUD');
    const [toCurrency, setToCurrency] = useState('USD');
    const [toAmount, setToAmount] = useState<number>(0);
    const [fromAmount, setFromAmount] = useState<number>(0);

    const { fetchCurrenciesRate } = useAction()

    const { loading, error, data } = useTypedSelector((state) => state.repositories)

    const handleFromCurrencyChange = (newCurrency: string) => {
        setFromCurrency(newCurrency);
    };

    const handleToCurrencyChange = (newCurrency: string) => {
        setToCurrency(newCurrency);
    };

    const handleFromAmountChange = (newAmount: number) => {
        setFromAmount(newAmount);
        let convertedAmount;
        if (fromCurrency === 'USD') {
            convertedAmount = data['USD'];
        } else if (toCurrency === 'USD') {
            convertedAmount = (1 / data[fromCurrency]) * fromAmount;
        } else {
            const fromToUSD = (1 / data["USD"]) * fromAmount;
            convertedAmount = fromToUSD / data[toCurrency];
        }
        // Apply the conversion rate or calculation logic hers
        setToAmount(convertedAmount);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    useEffect(() => {
            fetchCurrenciesRate()
            setCurrencies(Object.keys(data))
    }, [loading])

    return (
        <Fragment>
            {loading ? 'loading' :
                <form className="center" style={formStyle} onSubmit={(e) => onSubmit(e)}>
                    <Card className="card center" >

                        <CurrencyConvertorHeader />
                        <Container className='margin-lg'>
                            <CurrencySelection title="From"
                                currencies={currencies}
                                selectedCurrency={fromCurrency}
                                onCurrencyChange={handleFromCurrencyChange}
                                disabled={false}
                                inputValue={fromAmount}
                                onInputChange={handleFromAmountChange} />
                            <Grid container justifyContent="center">
                                <img className="switch-button" src={SwitchImage} />
                            </Grid>
                            <CurrencySelection title="To"
                                currencies={currencies}
                                selectedCurrency={toCurrency}
                                onCurrencyChange={handleToCurrencyChange}
                                disabled={true}
                                inputValue={toAmount}
                                onInputChange={() => { }} />
                        </Container>
                        <Button type='submit' className="button passing-sm">Submit</Button>
                    </Card>
                </form>
            }

        </Fragment>
    )
}

export default Convertor;