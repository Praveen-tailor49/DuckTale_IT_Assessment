import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api/employee" });

// All Use
export const get_Employee = async () => {
    return await API.get("/getemployee");
}
export const save_Employee = async (formData) => {
    return await API.post("/addemployee", formData);
}

export const update_Employee = async (formData) => {
    return await API.post("/updateemployee", formData);
}

export const delete_Employee = async (formData) => {
    return await API.post("/deleteemployee", formData);
}

export const get_Single_Employee_Data = async (formData) => {
    return await API.post("/singleemployee", formData);
}