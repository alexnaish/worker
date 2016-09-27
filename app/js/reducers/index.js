import { combineReducers } from 'redux'
import clients from './clients'
import auth from './auth'

const reducers = combineReducers({
    auth,
    clients
});

export default reducers;
