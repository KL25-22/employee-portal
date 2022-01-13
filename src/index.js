import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import rootReducer from './reducers/reducer'
import {applyMiddleware,createStore} from 'redux'
import {loadEmployees} from './actions/action-creators'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
));

// console.log("store1:"+store.getState())
// let sampledata= [
//   {LocationId:'BG',Name:'Vijay',Age:'42',Department:'DEP1',Designation:'Desgn1',EmployeeId:'E104'},
//   {LocationId:'AR',Name:'jay',Age:'42',Department:'DEP2',Designation:'Desgn2',EmployeeId:'E105'}
// ]
// store.dispatch(loadEmployees(sampledata))
// console.log("store2:"+store.getState())

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
