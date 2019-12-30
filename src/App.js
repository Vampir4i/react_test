import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import RegistrationPageContainer from './Registration/RegistrationPageContainer';
import LoginPageContainer from './Login/LoginPageContainer';
import MainPageContainer from './MainPage/MainPageContainer';


function App() {
  return (
    <div className="App">
      <Route path='/login' render={() => <LoginPageContainer />} />
      <Route path='/registration' render={() => <RegistrationPageContainer />} />
      <Route path='/main' render={() => <MainPageContainer />} />
    </div>
  );
}

export default App;
