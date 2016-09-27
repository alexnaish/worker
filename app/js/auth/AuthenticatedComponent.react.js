import React from 'react';
import {
    connect
} from 'react-redux';
import {
    withRouter
} from 'react-router'

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth(this.props.loggedIn);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(this.props.loggedIn);
        }

        checkAuth(isLoggedIn) {
            if (isLoggedIn !== true) {
                this.props.router.push(`/login`);
            }
        }

        render() {
            return ( <
                Component {...this.props
                }
                />
            )

        }
    }

    const mapStateToProps = (state) => {
        return ({
            loggedIn: state.auth.loggedIn
        });
    };

    return connect(mapStateToProps)(withRouter(AuthenticatedComponent));

}
