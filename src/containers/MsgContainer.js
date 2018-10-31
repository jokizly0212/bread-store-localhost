import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Notifier from './../components/Notifier';
import { actDisplayNotifier } from '../actions';
import { actDeleteNotifier } from './../actions/index';

class MsgContainer extends Component {
    render() {
        var { message } = this.props;
        return (
            <div>
              {this.displayNotifier(message)} 
            </div>
        );
    }

    displayNotifier = (message) => {
        var { displayNotifier, onDisplayNotifier, onDeleteNotifier } = this.props;
        if(displayNotifier === true) {
            return <Notifier 
                        message = {message} 
                        onDisplayNotifier = {onDisplayNotifier}
                        onDeleteNotifier = {onDeleteNotifier}
                    />
        }
    }
}


MsgContainer.propTypes = {
    message : PropTypes.string.isRequired,
    displayNotifier : PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message,
        displayNotifier: state.notifier.displayNotifier
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDisplayNotifier: () => {
            dispatch(actDisplayNotifier())
        },
        onDeleteNotifier: () => {
            dispatch(actDeleteNotifier())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MsgContainer)