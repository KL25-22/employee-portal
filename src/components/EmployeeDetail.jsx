import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import React from 'react'
import {Table,Container,Row,Col} from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {getEmployee} from '../actions/action-creators';

function EmployeeDetail({getEmployee,employee}) {
    console.log("emp:"+employee)
    const {locId,ecode} =useParams();
    //const [employee,setEmployee] = useState();

    useEffect(()=>{
        async function fetchEmployee(){
        getEmployee(locId,ecode);
        }
        fetchEmployee();
    }, [locId,ecode] ) ;  //if locId or ecode is updated then only useEffect will execute

    return (<React.Fragment> {employee && createTable()}</React.Fragment>)

    function createTable(){
        return(
    <Container>
        <Row>
        <Col className="col-md-6 mx-auto">
        <Table bordered striped hover>
        <thead>
        <tr>
        <th colSpan="2"><h3>Employee Details</h3></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th>Name</th>
        <td>{employee.Name}</td>
        </tr>
        <tr>
        <th>Employee Code</th>
        <td>{employee.EmployeeId}</td>
        </tr>
        <tr>
        <th>Age</th>
        <td>{employee.Age}</td>
        </tr>
        <tr>
        <th>Department</th>
        <td>{employee.Department}</td>
        </tr>
        <tr>
        <th>Designation</th>
        <td>{employee.Designation}</td>
        </tr>
        <tr>
        <th>Location</th>
        <td>{employee.LocationId}</td>
        </tr>
        </tbody>
        </Table>
        </Col>
        </Row>
        </Container>
        )}
}

function mapStateToProps(state){
    return{
        employee:state.employeeState.employee
    }
}

function mapDispatchToProps(dispatch){
    let actionMap={
        getEmployee
    }
    return bindActionCreators(actionMap,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetail);