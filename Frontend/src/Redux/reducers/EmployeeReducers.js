import {
    Employee_Data,
    Employee_Modal_Status,
    Employee_Single_Data,
    Employee_Status,
    Edit_Count,
    Error_Status
} from "../actionType"

const initialState = {
    employeeData: [], employeeModalStatus: false, employeeSingleData: [], employeeStatus: Boolean, editCount: 0, errorStatus: Boolean
}

const EmployeeReducers = (state = initialState, action) => {
    switch (action.type) {

        case Employee_Data:
            return {
                ...state,
                employeeData: action.payload
            }
        case Employee_Modal_Status:
            return {
                ...state,
                employeeModalStatus: action.payload
            }
        case Employee_Single_Data:
            return {
                ...state,
                employeeSingleData: action.payload
            }
        case Employee_Status:
            return {
                ...state,
                employeeStatus: action.payload
            }
        case Edit_Count:
            return {
                ...state,
                editCount: action.payload
            }
        case Error_Status:
            return {
                ...state,
                errorStatus: action.payload
            }
        default:
            return state
    }
}

export default EmployeeReducers