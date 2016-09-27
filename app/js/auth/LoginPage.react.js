import React, {Component, PropTypes} from 'react'

export class LoginPage extends Component {

    static propTypes = {
        errorMessage: PropTypes.string,
        onSubmit: PropTypes.func.isRequired
    };

    handleLoginSubmit(ev) {
        ev.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange(ev) {
        ev.preventDefault();
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    render() {

        const { errorMessage } = this.props;

        return (
            <div className="login">
                <h1 className="title">
                    <span className="focus">Work</span>er</h1>
                <div className="login-container">
                    <span className="error">{errorMessage || null}</span>
                    <form onSubmit={this.handleLoginSubmit.bind(this)}>
                        <input name="username" placeholder="Username" type="text" onChange={this.handleChange.bind(this)} required/>
                        <input name="password" placeholder="Password" type="password" onChange={this.handleChange.bind(this)} required/>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <ul className="cubes">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default LoginPage;
