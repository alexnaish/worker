import * as types from '../constants/types'
import PouchDB from 'pouchdb'

const db = new PouchDB('clients');

export function initialiseClients(params) {
    return (dispatch) => {
        dispatch(loading());
        const remoteDb = new PouchDB('http://couch.naish.io/clients', {
            auth: {
                username: params.username,
                password: params.password
            }
        });
        PouchDB.replicate(remoteDb, db, {
                live: true
            }).on('change', function (info) {
                console.log("info", info);
            }).on('error', function (err) {
                return dispatch(getClientsFailure(err));
            }).on('denied', function (err) {
                return dispatch(getClientsFailure(err));
            }).on('complete', function () {
                return dispatch(loaded());
            });
    };
}


export function loading() {
    return {
        type: types.LOADING_CLIENTS
    };
}

export function loaded() {
    return {
        type: types.LOADED_CLIENTS
    };
}

export function submitGetClientsRequest() {
    return {
        type: types.GET_CLIENTS
    };
}

export function getClientsSuccess(clientsResponse) {
    return {
        type: types.GET_CLIENTS_SUCCESS,
        payload: clientsResponse
    };
}

export function getClientsFailure() {
    return {
        type: types.GET_CLIENTS_FAILURE
    };
}

export function getClients() {
    return (dispatch, getState) => {
        dispatch(loading());
        dispatch(submitGetClientsRequest());
        db.allDocs({
                include_docs: true
            })
            .then(res => {
              dispatch(loaded());
                return dispatch(getClientsSuccess(res));
            })
            .catch(err => {
                dispatch(loaded());
                return dispatch(getClientsFailure());
            });
    };
}
