import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const emptyEmployeeObject = {
  firstName: '',
  lastName: '',
  idNumber: '',
  jobTitle: '',
  annualSalary: '',
};

class EmployeeForm extends Component {
  state = emptyEmployeeObject;

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

  addEmployee = () => {
    axios({
      method: 'POST',
      url: '/employees',
      data: this.state
    }).then( (response) => {
      this.getEmployees();
    }).catch( (error) => {
      alert('Error .. bad stuff');
    })
    } 
  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch( { type: 'ADD_EMPLOYEE', payload: this.state } )
    this.clearEmployeeFields();
    this.getEmployees();
  }

  clearEmployeeFields = () => {
    this.setState(emptyEmployeeObject);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} placeholder="First Name" value={this.state.firstName} name="firstName" />
        <input onChange={this.handleChange} placeholder="Last Name" value={this.state.lastName} name="lastName" />
        <input onChange={this.handleChange} placeholder="ID Number" value={this.state.idNumber} name="idNumber" />
        <input onChange={this.handleChange} placeholder="Job Title" value={this.state.jobTitle} name="jobTitle" />
        <input onChange={this.handleChange} placeholder="Annual Salary" value={this.state.annualSalary} name="annualSalary" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect()(EmployeeForm);
