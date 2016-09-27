import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import clients from './clients'
import auth from './auth'

const reducers = combineReducers({
    auth,
    clients,
    routing: routerReducer
});

export default reducers;
