import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../display/Header.react';

export class App extends Component {
	render () {
		const content =  this.props.children ? React.cloneElement(this.props.children, this.props) : 'Loading...';
		const { loggedIn } = this.props.auth;
		return (
			<div className={'container' + (loggedIn ? ' logged-in' : '') } >
				<Header isLoggedIn={loggedIn}/>
				<div className='content'>
					{content}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => state;
export default connect(
	mapStateToProps
)(App);
