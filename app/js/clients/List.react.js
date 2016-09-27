import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'

import * as actions from '../actions/clients';

export class List extends Component {

    componentWillMount() {
        this.props.actions.getClients();
    }

    render() {

			const { count, list, loading } = this.props.clients;
			console.log("count", count);
			console.log("list", list);
			console.log("loading", loading); 
			return (
				<div>
						There are '{count}' clients listed.
						<ul>
							{ loading
								? 'Loading....'
								: list.map(client => { Client: {client.id} })
							}
						</ul>
				</div>
			);
    }
};

const mapStateToProps = (state) => {
		return {
			clients: state.clients
		};
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
