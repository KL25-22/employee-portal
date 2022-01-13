import {Table} from 'react-bootstrap'
import {EmployeeContext} from './Home'
import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Trash } from 'react-bootstrap-icons'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {deleteEmployee} from '../actions/action-creators';

function EmployeeList({deleteEmployee}){
    const {data} = useContext(EmployeeContext) 

    function handleDelete(locId,eCode,e){
        if(window.confirm('Do you want to delete')){
        deleteEmployee(locId,eCode);
        }
    }

    return(
        <React.Fragment>
            <Link to = "/employees/create" className="btn btn-success" >Add employee</Link>
            <Table striped bordered hover>
        <thead>
        <tr>
            <th>Location Id</th>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Department</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {
                data.map((item,index)=>{
                    return(<tr key={index}>
                    <td>{item.LocationId}</td>
                    <td>{item.EmployeeId}</td>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Designation}</td>
                    <td>{item.Department}</td>
                    <td><Link to = {`/employees/loc/${item.LocationId}/ecode/${item.EmployeeId}`}>Details</Link></td>
                    <td>
                        <Trash className="trash-style" onClick={(e)=> handleDelete(item.LocationId,item.EmployeeId,e)} />
                    </td>
                   </tr> )
                })
            }
        </tbody>
        </Table>
        </React.Fragment>
        )
}

function mapDispatchToProps(dispatch){
    let actionMap={
        deleteEmployee
    }
    return bindActionCreators(actionMap,dispatch)
}

export default connect(null,mapDispatchToProps)(EmployeeList);