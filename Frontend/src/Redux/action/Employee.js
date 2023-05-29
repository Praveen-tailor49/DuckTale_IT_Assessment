import { toastifyError, toastifySuccess } from "../../Component/AlertMess";
import {
    Employee_Data, Employee_Modal_Status, Error_Status
} from "../actionType"
import * as api from '../api'


export const get_Employee = () => async (dispatch) => {
    try {
        const { data } = await api.get_Employee();
        dispatch({ type: Employee_Data, payload: data })
      } catch (error) {
        dispatch({ type: Employee_Data, payload: [] })
      }
};

export const save_Employee = (formData) => async (dispatch) => {
    dispatch({ type: Error_Status, payload: false })
    try {
        const { data } = await api.save_Employee(formData);
        toastifySuccess('Add Employee'); dispatch(get_Employee());
        dispatch({ type: Employee_Modal_Status, payload: false }); dispatch({ type: Error_Status, payload: false })
      } catch (error) {
        toastifyError('Not Add Employee')
        dispatch({ type: Employee_Modal_Status, payload: false })
      }
};

export const update_Employee = (formData) => async (dispatch) => {
    dispatch({ type: Error_Status, payload: false })
    try {
        const { data } = await api.update_Employee(formData);
        toastifySuccess('Update Employee'); dispatch(get_Employee());
        dispatch({ type: Employee_Modal_Status, payload: false }); dispatch({ type: Error_Status, payload: false })
      } catch (error) {
        toastifyError('Not Update Employee')
        dispatch({ type: Employee_Modal_Status, payload: false })
      }
};

export const delete_Employee = (formData) => async (dispatch) => {
    try {
        const { data } = await api.delete_Employee(formData);
        toastifySuccess('Delete Employee'); dispatch(get_Employee());
      } catch (error) {
        toastifyError('Not Delete Employee')
      }
};