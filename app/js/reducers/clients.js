import { combineReducers } from 'redux'
import { GET_CLIENTS_SUCCESS } from '../constants/types'

export function clients(state = {}, action = {}) {
    if (action.type === GET_CLIENTS_SUCCESS) {
        return action.payload.rows;
    }
    return state;
}

export function clientsCount(state = {}, action = {}) {
    if (action.type === GET_CLIENTS_SUCCESS) {
        return action.payload.total_rows;
    }
    return state;
}

export default combineReducers({
    clients,
    clientsCount
});
