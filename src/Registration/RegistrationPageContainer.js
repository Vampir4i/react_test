import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import RegistrationPage from './RegistrationPage';
import { sendRegistrationInfo } from './../redux/auth-reducer';
import { Redirect } from 'react-router-dom'

class RegistrationPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            email: ''
        };
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeState(prop, value) {
        this.setState((prevState, props) => ({
            [prop]: value
        }))
    }

    inputHandler(e) {
        this.changeState(e.target.name, e.target.value);
    }

    submitHandler() {
        this.props.sendRegistrationInfo(this.state.login, this.state.password);
    }
    render() {
        if(this.props.isAuth) return <Redirect to='/main' />
        return (
            <RegistrationPage inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { sendRegistrationInfo })
)(RegistrationPageContainer);