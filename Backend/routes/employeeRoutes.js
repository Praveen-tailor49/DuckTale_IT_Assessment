import express from "express";
import {
  addEmployee, getEmployee, updateEmployee, deleteEmployee
} from "../controller/employeeController.js";
const router = express.Router();


router.post("/addemployee", addEmployee);
router.get("/getemployee", getEmployee);
router.post("/updateemployee", updateEmployee);
router.post("/deleteemployee", deleteEmployee);


export default router;
