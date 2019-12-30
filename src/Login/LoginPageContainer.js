import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoginPage from './LoginPage';

class LoginPageContainer extends React.Component {
    render() {
        return (
            <LoginPage />
        )
    }
}

const mapStateToProps = (state) => ({

})

export default compose(
    connect(mapStateToProps, {})
)(LoginPageContainer)