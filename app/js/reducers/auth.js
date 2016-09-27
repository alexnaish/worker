import { combineReducers } from 'redux'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/types'
import auth from '../auth/authentication';

export function user(state = {}, action = {}) {
    if (action.type === LOGIN_SUCCESS) {
        return action.payload;
    }
    return state;
}

export function error(state = {}, action = {}) {
    if (action.type === LOGIN_FAILURE) {
        return action.payload.reason || 'Invalid credentials!';
    }
    return null;
}

export function loggedIn(state = {}, action = {}) {
    if (action.type === LOGIN_SUCCESS) {
        return true;
    }
    return state;
}

export default combineReducers({
    user,
    loggedIn,
    error
});
