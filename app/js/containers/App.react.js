import React, { Component } from 'react';
import {connect} from 'react-redux';

export class App extends Component {

	render () {
		const content =  this.props.children ? React.cloneElement(this.props.children, this.props) : 'Loading...';
		return (
			<div className="login-page">
				<div className='content'>
					<h1>THE APP!!!</h1>
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
