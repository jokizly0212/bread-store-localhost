import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";

class Notifier extends Component {
    render() {
        return (
            <AlertContainer>
                <Alert type="info"  onDismiss= {()=>this.onDismiss()} timeout = {1500}>
                    <b>Notification</b>
                    <p className="m-0 p-0">{this.props.message}</p>
                </Alert>
            </AlertContainer>
        );
    }
    onDismiss = () => {
        this.props.onDeleteNotifier();
    }
}


export default Notifier;