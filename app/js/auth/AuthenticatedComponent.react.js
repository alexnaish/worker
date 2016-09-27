import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router'

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            if (!isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.props.router.push(`login?next=${redirectAfterLogin}`);
            }
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => {
        return ({
            token: state.auth.user,
            userName: state.auth.token,
            isAuthenticated: state.auth.isAuthenticated
        });
    };

    return connect(mapStateToProps)(withRouter(AuthenticatedComponent));

}
