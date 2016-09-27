import * as types from '../constants/types'
import PouchDB from 'pouchdb'

// var remoteDb = new PouchDB('http://couch.naish.io/clients', {skipSetup: true});
// var db = new PouchDB('clients');
//
// db.replicate.sync(remoteDb, { live: true, retry: true })
//     .on('change', function (change) {
//         console.log("sync change", change);
//     })
//     .on('complete', function () {
//         console.log('complete', arguments);
//     }).on('error', function (err) {
//         console.log('error', arguments);
//     });

export function submitGetClientsRequest() {
    return {type: types.GET_CLIENTS};
}

export function getClientsSuccess(clientsResponse) {
    return {type: types.GET_CLIENTS_SUCCESS, payload: clientsResponse};
}

export function getClientsFailure() {
    return {type: types.GET_CLIENTS_FAILURE};
}

export function getClients() {
    return dispatch => {
        dispatch(submitGetClientsRequest());
        return db.allDocs({include_docs: true})
            .then(res => {
                dispatch(getClientsSuccess(res));
            })
            .catch(err => {
                dispatch(getClientsFailure());
            });
    };
}
