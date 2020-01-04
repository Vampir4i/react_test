import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRedirect } from './../hoc/withRedirect';
import { addWorkerServer, updateWorkerServer, getWorkersServer, deleteWorkerServer } from './../redux/workers-reducer';

class MainPageContainer extends React.Component {
    componentDidMount(){
        this.props.getWorkersServer(this.props.currentPage, this.props.pageSize);
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
        this.deleteWorker = this.deleteWorker.bind(this);
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
            this.props.addWorkerServer(this.state.workerInfo, this.props.currentPage, this.props.pageSize);
        this.resetWorkerInfo();
    }

    onPageChange = (pageNumber) => {
        this.props.getWorkersServer(pageNumber, this.props.pageSize);
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

    deleteWorker(id){
        let currentPage = this.props.currentPage;
        currentPage = this.props.workers.length == 1? --currentPage : currentPage;
        this.props.deleteWorkerServer(id, currentPage, this.props.pageSize);
    }

    render() {
        return (
            <MainPage workers={this.props.workers} pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} totalWorkersCount={this.props.totalWorkersCount} 
                WI={this.state.workerInfo} changeInput={this.changeInput} 
                submitHandler={this.submitHandler} selectWorker={this.selectWorker} 
                deleteWorker={this.deleteWorker} onPageChange={this.onPageChange} />
        )
    }
}

const mapStateToProps = (state) => ({
    workers: state.workersPage.workers,
    pageSize: state.workersPage.pageSize,
    totalWorkersCount: state.workersPage.totalWorkersCount,
    currentPage: state.workersPage.currentPage
})

export default compose(
    connect(mapStateToProps, {addWorkerServer, updateWorkerServer, getWorkersServer, deleteWorkerServer}),
    withRedirect
)(MainPageContainer)
