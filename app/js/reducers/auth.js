import { combineReducers } from 'redux'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/types'
import auth from '../auth/authentication';

export function db(state = {}, action = {}) {
    if (action.type === LOGIN_SUCCESS) {
        return action.payload;
    }
    return state;
}

export function user(state = {}, action = {}) {
    if (action.type === LOGIN_SUCCESS) {
        return action.payload;
    }
    return state;
}

export function error(state = {}, action = {}) {
    if (action.type === LOGIN_FAILURE) {
        switch (action.payload.error) {
            case 'unauthorized':
                return 'Invalid credentials!';
                break;
            default:
                return 'Invalid credentials!';
                break;
        }
    }
    return null;
}

export function loggedIn(state = {}, action = {}) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return true;
            break;
        default:
            return false;
    }
}

export default combineReducers({
    user,
    loggedIn,
    error
});
