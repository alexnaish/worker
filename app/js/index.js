import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from './store/';
import Root from './containers/Root.react';
import PouchDB from 'pouchdb';

const store = createStore();
const history = syncHistoryWithStore(hashHistory, store);

render((
    <Root history={history} store={store} />
), document.getElementById('app'));
