import PouchDB from 'pouchdb';
import { combineReducers } from 'redux'
import { LOADING_CLIENTS, LOADED_CLIENTS, GET_CLIENTS_SUCCESS } from '../constants/types'

export function loading(state = {}, action = {}) {
    switch (action.type) {
        case LOADING_CLIENTS:
            return true;
            break;
        case LOADED_CLIENTS:
            return false;
            break;
        default:
            return false;
    }
}

export function list(state = {}, action = {}) {
    if (action.type === GET_CLIENTS_SUCCESS) {
        return action.payload.rows;
    }
    return state;
}

export function count(state = {}, action = {}) {
    if (action.type === GET_CLIENTS_SUCCESS) {
        return action.payload.total_rows;
    }
    return state;
}

export default combineReducers({
    loading,
    list,
    count
});
