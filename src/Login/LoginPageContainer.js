import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoginPage from './LoginPage';
import { authUser } from './../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

class LoginPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
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
        this.props.authUser(this.state.login, this.state.password);
    }

    render() {
        if(this.props.isAuth) return <Redirect to='/main' />
        return (
            <LoginPage inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {authUser})
)(LoginPageContainer)