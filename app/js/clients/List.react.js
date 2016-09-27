import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/clients';

export class List extends Component {

	componentWillMount() {
		this.props.actions.getClients();
	}

	render () {
		return <div>This is an client list container</div>;
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
	mapStateToProps,
    mapDispatchToProps
)(List);
