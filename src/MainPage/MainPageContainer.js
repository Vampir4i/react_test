import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRedirect } from './../hoc/withRedirect';
import { addWorkerServer, updateWorkerServer, getWorkersServer, deleteWorkerServer } from './../redux/workers-reducer';

class MainPageContainer extends React.Component {
    componentDidMount(){
        this.props.getWorkersServer();
    }

    constructor(props) {
        super(props);
        this.state = {
            workerInfo: {
                _id: '',
                firstName: '',
                lastName: '',
                age: '',
                gender: '',
                info: '',
                data: '',
                salary: '',
                position: ''
            }
        }

        this.changeInput = this.changeInput.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.selectWorker = this.selectWorker.bind(this);
    }

    selectWorker(worker) {
        this.setState((prevState, props) => ({
            workerInfo: { ...worker }
        }));
    }

    changeState(param, value) {
        this.setState((prevState, props) => ({
            workerInfo: { ...prevState.workerInfo, [param]: value }
        }));
    }

    changeInput(e) {
        this.changeState(e.target.name, e.target.value);
    }

    submitHandler() {
        this.state.workerInfo._id? this.props.updateWorkerServer(this.state.workerInfo):
                                    this.props.addWorkerServer(this.state.workerInfo);
        this.resetWorkerInfo();
    }

    resetWorkerInfo(){
        this.setState((prevState, props) => ({
            workerInfo: {
                _id: '',
                firstName: '',
                lastName: '',
                age: '',
                gender: '',
                info: '',
                data: '',
                salary: '',
                position: ''
            }
        }))
    }

    render() {
        return (
            <MainPage workers={this.props.workers} WI={this.state.workerInfo} 
                changeInput={this.changeInput} submitHandler={this.submitHandler}
                selectWorker={this.selectWorker} deleteWorker={this.props.deleteWorkerServer} />
        )
    }
}

const mapStateToProps = (state) => ({
    workers: state.workersPage.workers
})

export default compose(
    connect(mapStateToProps, {addWorkerServer, updateWorkerServer, getWorkersServer, deleteWorkerServer}),
    withRedirect
)(MainPageContainer)
