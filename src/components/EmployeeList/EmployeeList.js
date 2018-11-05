import React, { Component } from 'react';
import { connect } from 'react-redux';
import  axios from 'axios';

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class EmployeeList extends Component {

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios.get('/employees')
    .then( (response) => {
      // const persons = res.data;
      this.props.dispatch({type: 'GET_EMPLOYEES', payload: response.data });
    })
    .catch( (error) => {
      alert('Bad stuff happened')
    })
  }

  deleteEmployee = (id) => {
    // axios call to delete employee
    axios({
      method: 'DELETE',
      url: `/employees/${id}`
    })
    .then( (response) => {
      // const persons = res.data;
      this.getEmployees();
    })
    .catch( (error) => {
      alert('Bad stuff happened')
    })
  }

  // To Do - add delete

//const EmployeeList = ({ employeeList, deleteEmployee }) => (
  // const EmployeeList = ( props ) => (
    render() {
      return (
        <ul>
          {this.props.reduxState.employeeReducer.map(employee => (
            <li key={employee.id}>
              {`${employee.firstname}
              ${employee.lastname}
              is the ${employee.jobtitle}
              and makes ${employee.annualsalary}`}
              <button onClick={() => { 
                  this.props.dispatch( { type: 'DELETE_EMPLOYEE', payload: employee } )} 
              }>
                Delete
              </button>
            </li>
          ))}
        </ul>
        )
  }
}

export default connect(mapReduxStateToProps)(EmployeeList);
