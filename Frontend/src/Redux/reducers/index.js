import { combineReducers } from "redux";
import EmployeeReducers from "./EmployeeReducers";



export default combineReducers({
  Employee: EmployeeReducers
});
