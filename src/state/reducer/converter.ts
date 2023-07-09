import { type } from "os"
import { ActionType } from "../action-type"
import { Action } from "../actions"

interface ConverterState {
    loading: boolean,
    error: string | null,
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: ConverterState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_CURRENCIES:
            return { loading: false, error: null, data: [] };
        case ActionType.GET_CURRENCIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.GET_CURRENCIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
}

export default reducer;