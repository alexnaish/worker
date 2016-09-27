import React from 'react';
import { render } from 'react-dom';

import createStore from './store/';
import Root from './containers/Root.react';

import PouchDB from 'pouchdb';
import auth from 'pouchdb-authentication';
PouchDB.plugin(auth);

let store = createStore();

render((
    <Root store={store} />
), document.getElementById('app'));
