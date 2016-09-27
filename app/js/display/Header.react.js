import React, { Component, PropTypes } from 'react';
const remote = window.require('electron').remote;
const currentWindow = remote.getCurrentWindow();

export class Header extends Component {

    static propTypes = {
        displayUtils: PropTypes.bool
    }

    handleCloseClick() {
        currentWindow.close();
    }
    handleMaximiseClick() {
        currentWindow.maximize();
    }
    handleMinimiseClick() {
        currentWindow.minimize();
    }

    render() {
        return (
            <div className='header'>
                <div className="taskbar">
                    <i className="close fa fa-times" aria-hidden="true" onClick={this.handleCloseClick}></i>
                    <i className="minimise fa fa-minus" aria-hidden="true" onClick={this.handleMinimiseClick}></i>
                    <i className="maximise fa fa-plus" aria-hidden="true" onClick={this.handleMaximiseClick}></i>
                </div>
                {
                this.props.displayUtils
                    ? <div className="utils"> Some Utils</div>
                    : null
                }
            </div>
        );
    }

}

export default Header;
