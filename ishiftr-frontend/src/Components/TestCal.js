import React from 'react';
import axios from 'axios';
import moment from 'moment';
import EmployeeOnShift from './EmployeeOnShift';
import '../css/schedule.css';

const id = localStorage.getItem('id');
const authToken = localStorage.getItem('authToken');
const config = {
        headers: {
            'Authorization': "Bearer " + authToken            
        },
};


class Schedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            schedules: [],
            employees: [],
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/api/${id}/employees`, config)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    employees : res.data,
                    schedules: this.props.schedule
                })
            })
            .catch(function (error) {
                console.log('there is an error', error);
            });
   
    }



    render() {
        console.log(this.state.employees);
        return (
                        <div className = 'col px-4 mx-1 border-right border-dark' >
                            <div className='schedule-element-header mb-4'>
                                <div><strong>{this.state.schedules.day}</strong></div>
                                <div>{moment(this.state.schedules.date).format('LL')}</div> 
                            </div>
                            <EmployeeOnShift day={this.state.schedules.day} employees={this.state.employees}/>
                        </div>       
        );
    }
}

export default Schedule;