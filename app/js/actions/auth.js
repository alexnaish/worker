import { push } from 'react-router-redux';
import * as types from '../constants/types';

import { initialiseClients } from './clients';

import PouchDB from 'pouchdb';

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
        new PouchDB('http://couch.naish.io/_users', {
                auth: params
            })
						.get(`org.couchdb.user:${params.username}`)
	            .then(function (response) {
									dispatch(initialiseClients(params));
									dispatch(loginAttemptSuccess(Object.assign(response, params)));
	                dispatch(push('/app'));
	            }).catch(err => {
	                dispatch(loginAttemptFailure(err));
	            });
    };
}
