import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Employee_Modal_Status, Error_Status } from '../Redux/actionType';
import { save_Employee, update_Employee } from '../Redux/action/Employee';
import { RequiredFieldSpaceNotAllow } from './Validation/Validation';

const AddEmployee = () => {

    const dispatch = useDispatch()
    const employeeModalStatus = useSelector((state) => state.Employee.employeeModalStatus)
    const employeeSingleData = useSelector((state) => state.Employee.employeeSingleData)
    const employeeStatus = useSelector((state) => state.Employee.employeeStatus)
    const editCount = useSelector((state) => state.Employee.editCount)
    const errorStatus = useSelector((state) => state.Employee.errorStatus)

    console.log(employeeSingleData);

    const [value, setValue] = useState({
        name: '',
        department: '',
        salary: '',
        id: ''
    })

    const [errors, setErrors] = useState({
        nameError: '', departmentError: '', salaryError: ''
    })

    useEffect(() => {
        if (employeeSingleData._id) {
            setValue({
                ...value,
                name: employeeSingleData.name,
                department: employeeSingleData.department,
                salary: employeeSingleData.salary,
                id: employeeSingleData._id
            })
        } else {
            resetHooks()
        }
    }, [employeeSingleData, editCount])

    const resetHooks = () => {
        setValue({
            name: '',
            department: '',
            salary: '',
            id: ''
        });
        setErrors({
            nameError: '', departmentError: '', salaryError: ''
        })
    }

    const handlChange = (e) => {
        if(e.target.name === 'salary'){
            const checkNumber = e.target.value.replace(/[^0-9\s]/g, "")
            setValue({
                ...value,
                [e.target.name]: checkNumber
            })
        } else {
            setValue({
                ...value,
                [e.target.name]: e.target.value
            })
        }
        
    }

    const check_Validation_Error = (e) => {
        e.preventDefault()
        if (RequiredFieldSpaceNotAllow(value.name)) {
            setErrors(prevValues => { return { ...prevValues, ['nameError']: RequiredFieldSpaceNotAllow(value.name) } })
            dispatch({ type: Error_Status, payload: true })
        }
        if (RequiredFieldSpaceNotAllow(value.department)) {
            setErrors(prevValues => { return { ...prevValues, ['departmentError']: RequiredFieldSpaceNotAllow(value.department) } })
        }
        if (RequiredFieldSpaceNotAllow(value.salary)) {
            setErrors(prevValues => { return { ...prevValues, ['salaryError']: RequiredFieldSpaceNotAllow(value.salary) } })
        }
    }

    const { nameError, salaryError, departmentError } = errors

    useEffect(() => {
        if (salaryError === 'true' && departmentError === 'true' && nameError === 'true' && errorStatus) {
            if (employeeStatus) { dispatch(update_Employee(value)) }
            else dispatch(save_Employee(value))
        }
    }, [nameError, salaryError, departmentError, errorStatus])

    return (
        <>
            <Modal show={employeeModalStatus}
                onHide={() => { dispatch({ type: Employee_Modal_Status, payload: false }); resetHooks() }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control type="text" name='name' value={value.name} onChange={handlChange} placeholder="Employee Name" />
                            {errors.nameError !== 'true' ? (
                                <span style={{ color: 'red', fontSize: '13px', margin: '0px', padding: '0px' }}>{errors.nameError}</span>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Department</Form.Label>
                            <Form.Control as="textarea" rows={3} name='department' value={value.department} onChange={handlChange} />
                            {errors.departmentError !== 'true' ? (
                                <span style={{ color: 'red', fontSize: '13px', margin: '0px', padding: '0px' }}>{errors.departmentError}</span>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" name='salary' value={value.salary} onChange={handlChange} placeholder="Salary" />
                            {errors.salaryError !== 'true' ? (
                                <span style={{ color: 'red', fontSize: '13px', margin: '0px', padding: '0px' }}>{errors.salaryError}</span>
                            ) : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { dispatch({ type: Employee_Modal_Status, payload: false }); resetHooks() }}>
                        Close
                    </Button>
                    {
                        employeeStatus ?
                            <Button variant="primary" onClick={check_Validation_Error}>
                                Update
                            </Button>
                            :
                            <Button variant="primary" onClick={check_Validation_Error}>
                                Save
                            </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddEmployee