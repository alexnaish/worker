import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import { actionReporter, crashReporter } from '../middleware';

const store = () => {
    const middleware = [
        crashReporter,
        thunk,
        routerMiddleware(browserHistory),
        actionReporter
    ];
    const store = createStore(
        reducers,
        compose(applyMiddleware(...middleware))
    );
    return store;
};

export default store;
