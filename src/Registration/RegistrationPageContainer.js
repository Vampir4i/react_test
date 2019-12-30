import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import RegistrationPage from './RegistrationPage';

class RegistrationPageContainer extends React.Component {
    render() {
        return (
            <RegistrationPage />
        );
    }
}

const mapStateToProps = (state) => ({

})

export default compose(
    connect(mapStateToProps, {})
)(RegistrationPageContainer);