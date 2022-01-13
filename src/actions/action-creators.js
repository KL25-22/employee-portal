import * as ActionTypes from './action-types';
import axios from "axios";

const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL;

export function loadEmployees(employees) {
    return async (dispatch) => {
        try {
            let result = await axios.get(API_URL);
            dispatch({
                type: ActionTypes.GET_EMPLOYEES,
                payload: result.data
            })
            return Promise.resolve(result.data)
        }
        catch (ex) {
            return Promise.reject("error:", ex)
        }
    }
    // return{
    //     type:ActionTypes.GET_EMPLOYEES,
    //     payload:employees
    // }
}

export function addEmployee(employees) {
    return async (dispatch) => {
        try {
            let result = await axios.post(API_URL, employees); //adding to database but not to inmemory state
            dispatch({
                type: ActionTypes.ADD_EMPLOYEE,
                payload: employees
            })
            return Promise.resolve(result.data)
        }
        catch (er) {
            return Promise.reject("error:", er)
        }
    }
}

export function deleteEmployee(locId, employeeId) {
    return async (dispatch) => {
        try {
            let url = `${API_URL}/location/${locId}/empcode/${employeeId}`;
            let result = await axios.delete(url);
            dispatch({
                type: ActionTypes.DELETE_EMPLOYEE,
                payload: { locationId: locId, empCode: employeeId }
            })
            return Promise.resolve(result.data)
        }
        catch (er) {
            return Promise.reject("error:", er)
        }
    }
}

export function getEmployee(locId, employeeId) {
    console.log("here");
    return async (dispatch) => {
        try {
            let url = `${API_URL}/location/${locId}/empcode/${employeeId}`;
            let result = await axios.get(url);
            console.log("result:"+result);
            dispatch({
                type: ActionTypes.GET_EMPLOYEE,
                payload: result.data
            })
            return Promise.resolve(result.data)
        }
        catch(er){
            return Promise.reject("error:", er) 
        }
    }
}
