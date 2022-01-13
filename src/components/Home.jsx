
import {Col,Container,Row} from 'react-bootstrap'
import {getEmployees} from '../services/employee-services'
import EmployeeList from './EmployeeList'
import SearchBar from './SearchBar'
import React, {Component} from 'react';
import {connect} from 'react-redux';

export const EmployeeContext = React.createContext();
// export default function Home(){
//     console.log(process.env.REACT_APP_EMPLOYEE_API_URL)
//     return(<Container>
//         <Row>
//             <Col>
//                 <h2>Home</h2>
//             </Col>
//         </Row>
//         </Container>)
// }

 class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            employees:props.employees,
            filteredResult:props.employees
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    //lifecycle method which is called automatically after constructor
    static getDerivedStateFromProps(newProps,state){
        console.log("newProps:"+newProps);
        if(newProps.employees.length !== state.employees.length){
        return{
            employees:newProps.employees,
            filteredResult:newProps.employees
        }
    }
        return null;
    }

    async componentDidMount(){
        // let employees = await getEmployees()
        // .catch(err=> console.log("Error in loading Employee data"));
        // console.log("emps:"+employees)
        // this.setState({employees,filteredResult :employees}) //equivalent to {employees :employees} 
    }

    handleSearch(searchText){
        if(searchText && searchText.length >0){
            searchText = searchText.toUpperCase();
            let filteredResult = this.state.employees.filter((item)=> item.Name.toUpperCase().indexOf(searchText) >= 0 || item.LocationId.toUpperCase().indexOf(searchText) >= 0)
            this.setState({filteredResult })
            console.log("Searched result:"+filteredResult)
        }
        else{
            this.setState({filteredResult : this.state.employees})
        }
    }

    render(){
        console.log("1:"+this.state.filteredResult)
    return(
    <EmployeeContext.Provider value ={{employees: this.state.employees, data:this.state.filteredResult,doSearch:this.state.handleSearch}}>
    <Container>
        <Row>
            <Col>
                <h2>Home</h2>
                <SearchBar/>
                <EmployeeList/>
            </Col>
        </Row>
        </Container>
        </EmployeeContext.Provider>
        )};
}

function mapStatetoProps(state){
    //propOfComponent:AppReduxState.reducerMapper.stateValue
    return{
        employees:state.employeeState.employees
    }
}

// function mapDispatchtoProps(dispatch){

// }
// let connect = mapStatetoProps();
// export default connect(Home);
export default connect(mapStatetoProps)(Home);