import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SwitchImage from '../img/converter-swap-icon.png'

import CurrencyConvertorHeader from "./CurrencyConvertorHeader";
import CurrencySelection from './CurrencySelection';
import SubmitButton from './Submit';

const Convertor = () => {
    const currencies: string[] = ['AUD', 'USD', 'VND']
    return (
        <Card className="card center" >
            <CurrencyConvertorHeader />
            <Container className='margin-lg'>
                <CurrencySelection title="From" currencies={currencies} />
                <Grid container justifyContent="center">
                    <img className="switch-button" src={SwitchImage} />
                </Grid>
                <CurrencySelection title="To" currencies={currencies} />
            </Container>
            <SubmitButton/>
        </Card>
    )
}

export default Convertor;