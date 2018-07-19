import React from 'react';
import Menu from '../Components/Menu';
//import Calendar from './Calendar';
import '../css/ShiftSchedule.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import SignOut from './Signout';
import Employee from './Employee';
import '../css/employees.css'



class EmployeesList extends React.Component {
    render() {
        return (
            <div className = 'container'>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Schedule</BreadcrumbItem>
                </Breadcrumb>
                <div className="row-signout">
                    <SignOut />
                </div>
                <div className = 'mcContainer'>
                    <Menu />               
                    <Col className = 'employeesList'>
                        <Employee />
                    </Col>
                </div>                                
            </div>
        );
    }
}

export default EmployeesList;
