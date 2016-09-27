import * as types from '../constants/types';
import PouchDB from 'pouchdb';

const db = new PouchDB('http://couch.naish.io/_users', {
	skipSetup: true,
    withCredentials: false,
    auth: {
        username: 'alexnaish',
        password: 'dragon123'
    }
});

export function submitLoginAttempt() {
	return {
		type: types.LOGIN_ATTEMPT
	};
}

export function loginAttemptSuccess(clientsResponse) {
	return {
		type: types.LOGIN_SUCCESS,
		payload: clientsResponse
	};
}

export function loginAttemptFailure(error) {
	return {
		type: types.LOGIN_FAILURE,
		payload: error
	};
}

export function attemptLogin(params) {
	return dispatch => {
		dispatch(submitLoginAttempt());
        console.log("params", params);
		db.login('alexnaish', 'dragon123', function (err, response) {
			if (err) {
                console.log("err", err);
				dispatch(loginAttemptFailure(err));
			} else {
                dispatch(loginAttemptSuccess(response));
            }
		});
	};
}
