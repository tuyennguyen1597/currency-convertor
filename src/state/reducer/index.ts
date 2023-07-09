import { combineReducers } from 'redux';
import converterReducer from './converter'

const reducers = combineReducers({
    repositories: converterReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>