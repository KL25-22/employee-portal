import { combineReducers } from "redux";
import employeeReducer from "./employee-reducer";

const rootReducer = combineReducers({
    employeeState:employeeReducer
    //add more reducers
    // complaintsState:complaintsReducer,
    // ordersState:ordersReducer
});

export default rootReducer