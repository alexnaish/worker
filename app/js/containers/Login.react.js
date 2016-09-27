import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../display/Header.react';
import LoginPage from '../auth/LoginPage.react';

import { bindActionCreators } from 'redux'
import { attemptLogin } from '../actions/auth';


export class App extends Component {

	componentDidMount() {
		if(this.props.auth.isLoggedIn) {
			this.props.router.push('/app')
		}
	}

	onLoginSubmit(params) {
		this.props.actions.attemptLogin(params);
	}

	render () {
		const { error } = this.props.auth;
		return (
			<div className="login-page">
				<Header displayUtils={false}/>
				<div className='content'>
					<LoginPage errorMessage={error} onSubmit={this.onLoginSubmit.bind(this)}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({attemptLogin}, dispatch) }
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
