
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import {Component} from 'react'
import { Navigate } from 'react-router-dom'
import { addEmployee } from '../actions/action-creators'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

class EmployeeForm extends Component {
    constructor(props){
        super(props);
        this.state={
            employee:{
                Name:'',
                Age:'',
                Destination:'',
                Department:'',
                LocationId:'',
                EmployeeId:''
            },
            errors:{
                name:'',
                age:'',
                destination:'',
                department:'',
                locationId:'',
                employeeId:''
            },
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        // let file = e.target.files[0];
        // let form = new FormData();
        // form.append("name","test2");
        // form.append("image",file);
        // axios.post(url,form);

        const{name,value} =e.target
        const {errors,employee} = this.state;
        switch(name){
            case "EmployeeId":
                if(value.length!==4) {
                    this.setState({errors:{...errors,employeeId:'Employee Code length must be 4 character'}})
                }
                else{
                    this.setState({errors:{...errors,employeeId:''}})
                }
            break;
            case 'Name':
                let exists=false;
                for(var ch of value){
                if(['*','$','@','!','.'].indexOf(ch)>=0){
                    exists=true;
                }
                if(exists)
                this.setState({errors:{...errors,Name:'Name should not contain special characters'}})
                else
                    this.setState({errors:{...errors,Name:''}})
            }
                break;
            default:
                break;
        }
            this.setState({
                employee:{...employee,[name]:value}
            })
    }

    async handleSubmit(e){
        e.preventDefault();
        const {errors,employee} = this.state;
        this.props.addEmployee(employee)
        this.setState({redirect :true})
        console.log(employee);
    }

    render(){
        if(this.state.redirect){
            return <Navigate to="/"></Navigate>
        }
        return(
            <Container>
            <Row>
            <Col className="col-md-6 mx-auto">
            <h2>Employee Create</h2>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="employeeId">
            <Form.Label>Employee code </Form.Label>
            <Form.Control type="text" name="EmployeeId" value={this.state.employee.EmployeeId} onChange={this.handleChange} placeholder="Enter employee code" />
            <div className="text-danger">{this.state.errors.employeeId}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="Name" value={this.state.employee.Name} onChange={this.handleChange} placeholder="Enter employee name" />
            <div className="text-danger">{this.state.errors.name}</div>
            <div className="text-danger">{this.state.errors.Name}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="Age" value={this.state.employee.Age} onChange={this.handleChange} placeholder="Enter employee age" />
            <div className="text-danger">{this.state.errors.age}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="designation">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" name="Designation" value={this.state.employee.Designation} onChange={this.handleChange} placeholder="Enter designation" />
            <div className="text-danger">{this.state.errors.designation}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" name="Department" value={this.state.employee.Department} onChange={this.handleChange} placeholder="Enter department" />
            <div className="text-danger">{this.state.errors.department}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="locId">
            <Form.Label>Location ID</Form.Label>
            <Form.Control type="text" name="LocationId" value={this.state.employee.LocationId} onChange={this.handleChange} placeholder="Enter location ID" />
            <div className="text-danger">{this.state.errors.locationId}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="Location" value={this.state.employee.Location} onChange={this.handleChange} placeholder="Enter location" />
            <div className="text-danger">{this.state.errors.locationId}</div>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>
            </Col>
            </Row>
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch){
    let actionMap={
        addEmployee:addEmployee
    }
    return bindActionCreators(actionMap,dispatch);
}

export default connect(null,mapDispatchToProps)(EmployeeForm);