import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SwitchImage from '../img/converter-swap-icon.png'
import { useAction } from '../hook/useActions';

import CurrencyConvertorHeader from "./CurrencyConvertorHeader";
import CurrencySelection from './CurrencySelection';
import SubmitButton from './Submit';
import { useTypedSelector } from '../hook/useTypeSelector';
import { ChangeEvent, Fragment, useEffect, useState } from 'react';

const Convertor = () => {
    const currencies: string[] = []
    const [fromCurrency, setFromCurrency] = useState('AUD');
    const [toCurrency, setToCurrency] = useState('USD');
    const [toAmount, setToAmount] = useState<number>(0);
    const [fromAmount, setFromAmount] = useState<number>(0);
    const { fetchCurrencies } = useAction()
    const { loading, error, data } = useTypedSelector((state) => state.repositories)

    const handleFromCurrencyChange = (newCurrency: string) => {
        setFromCurrency(newCurrency);
    };

    const handleToCurrencyChange = (newCurrency: string) => {
        setToCurrency(newCurrency);
    };

    const handleFromAmountChange = (newAmount: number) => {
        setFromAmount(newAmount);
        const convertedAmount = newAmount * 1.2; // Apply the conversion rate or calculation logic here
        setToAmount(convertedAmount);
      };



    useEffect(() => {
        fetchCurrencies()
    }, currencies)

    return (
        <Fragment>
            {loading ? 'loading' : <Card className="card center" >
                <CurrencyConvertorHeader />
                <Container className='margin-lg'>
                    <CurrencySelection title="From"
                        currencies={data}
                        selectedCurrency={fromCurrency}
                        onCurrencyChange={handleFromCurrencyChange}
                        disabled={false}
                        inputValue={fromAmount}
                        onInputChange={handleFromAmountChange} />
                    <Grid container justifyContent="center">
                        <img className="switch-button" src={SwitchImage} />
                    </Grid>
                    <CurrencySelection title="To"
                        currencies={data}
                        selectedCurrency={toCurrency}
                        onCurrencyChange={handleToCurrencyChange}
                        disabled={true}
                        inputValue={toAmount}
                        onInputChange={() => { }} />
                </Container>
                <SubmitButton />
            </Card>}

        </Fragment>
    )
}

export default Convertor;