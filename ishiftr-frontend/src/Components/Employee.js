import React, { Component } from 'react';
import { Card, CardText } from 'reactstrap';
// import FontAwesomeIcon  from 'react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import employees from '../testEmployees';

export default class Employee extends Component {
  render() {
    return (
      
      employees.map((employee) => {
          return  (
              <Card body outline color="primary" className ='card'>
              <div className = 'icons'>
                <i class="fas fa-pencil-alt"></i>
                <i class="far fa-trash-alt"></i>
              </div>
                <CardText>{employee.firstName} {employee.lastName}</CardText>
                <form>
                    <fieldset className='fieldset'>
                        <legend className = 'legend legend-1'>Availability:</legend>
                        <p>text here</p>
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className = 'legend'>Requested Time Off:</legend>
                        <p>text here</p>
                    </fieldset>
                </form>
              </Card>
        )
      })
    )
  }
}
