import React, { Component, PropTypes } from 'react';
import {Provider} from 'react-redux';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';

import { requireAuthentication } from '../auth/AuthenticatedComponent.react';
import AppContainer from '../containers/App.react';
import LoginContainer from '../containers/Login.react';
import ClientList from '../clients/List.react';
import MissingPage from '../misc/MissingPage.react';

export class Root extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    }

    render () {
        return (<Provider store={this.props.store}>
            <Router history={hashHistory}>
                <Redirect from="/" to="/login" />
                <Route path="/login" component={LoginContainer} />
                <Route path="/app" component={requireAuthentication(AppContainer)} >
                    <IndexRoute component={ClientList} />
                    <Route path='*' component={MissingPage} />
                </Route>
            </Router>
        </Provider>);
    }

}

export default Root;
