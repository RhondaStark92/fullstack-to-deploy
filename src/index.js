import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import axios from 'axios';

const employeeReducer = (state=[], action) => {
  console.log('In employee reducer...');
  if ( action.type === 'GET_EMPLOYEES' ) {
    // changing this.
    state = action.payload
    // axios.get('/employees')
    // .then( (response) => {
    //   // const persons = res.data;
    //   this.props.dispatch({type: 'SET_EMPLOYEES', payload: response.data });
    // })
    // .catch( (error) => {
    //   alert('Bad stuff happened')
    // })

  } else if ( action.type === 'ADD_EMPLOYEE' ) {
    console.log('Handling add of employee!');
    // Update state - spread out what used to be there, 
    // then add the new one from the action
    state = [ ...state, action.payload ];
  } else if ( action.type === 'DELETE_EMPLOYEE' ) {
    console.log('Handling delete of employee', state, action.payload);
    const employeeToDelete = action.payload;
    const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;
    state = state.filter(matchEmployee);
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    employeeReducer
    // Don't need combine right now, only one
    // But setup for later & gives us a employeeReducer in reduxState 
  }),
  applyMiddleware(logger)
)


ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
