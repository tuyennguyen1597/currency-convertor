import axios from 'axios'
import { Action } from '../actions'
import { ActionType } from '../action-type'
// import * as dotenv from 'dotenv';
import { Dispatch } from 'react';

// dotenv.config();

export const fetchCurrencies = () => {
    return async (dispatch: Dispatch<Action>)  => {
        dispatch({
            type: ActionType.GET_CURRENCIES
        });

        try {
            const url: string =  'http://localhost:5000/api/converter';
            const { data } = await axios.get(url);
            
            dispatch({
                type: ActionType.GET_CURRENCIES_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.GET_CURRENCIES_ERROR,
                payload: error.message
            })
        }
    }
}

export const fetchCurrenciesRate = () => {
    return async (dispatch: Dispatch<Action>)  => {
        dispatch({
            type: ActionType.GET_CURRENCIES
        });

        try {
            const url: string =  'http://localhost:5000/api/converter/rate';
            const { data } = await axios.get(url);

            dispatch({
                type: ActionType.GET_CURRENCIES_SUCCESS,
                payload: data.rates
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.GET_CURRENCIES_ERROR,
                payload: error.message
            })
        }
    }
}