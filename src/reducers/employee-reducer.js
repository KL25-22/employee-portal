
import  * as ActionTypes from '../actions/action-types';

const initialState={
    employees:[
    //  {LocationId:'BG',Name:'Vijay',Age:'42',Department:'DEP1',Designation:'Desgn1',EmployeeId:'E104'},
    //  {LocationId:'AR',Name:'jay',Age:'42',Department:'DEP2',Designation:'Desgn2',EmployeeId:'E105'}
    ],
    employee:undefined
}

function employeeReducer(state=initialState,action){
    console.log("act:"+JSON.stringify(action))
    const {type,payload} = action

    switch(type){
        case ActionTypes.GET_EMPLOYEES:
            return {...state,employees:payload};
        case ActionTypes.GET_EMPLOYEE:
            return {...state,employee:payload};
        case ActionTypes.ADD_EMPLOYEE:
            return {...state,employees:[...state.employees,payload]};
        case ActionTypes.DELETE_EMPLOYEE:
            let deletedItem = state.employees.find(item=>item.LocationId===payload.locationId && item.EmployeeId===payload.empCode);
            return {...state,employees:state.employees.filter((item) => deletedItem!==item)};
        default:
            return state;
    }
}

export default employeeReducer;