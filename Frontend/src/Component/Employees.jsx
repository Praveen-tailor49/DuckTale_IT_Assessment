import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_Employee, get_Employee } from '../Redux/action/Employee'
import DataTable from 'react-data-table-component';
import { Edit_Count, Employee_Modal_Status, Employee_Single_Data, Employee_Status } from '../Redux/actionType';
import AddEmployee from './AddEmployee';

const Employees = () => {

    const dispatch = useDispatch()
    const employeeData = useSelector((state) => state.Employee.employeeData)
    const editCount = useSelector((state) => state.Employee.editCount)

    useEffect(() => {
        if (employeeData.length === 0) dispatch(get_Employee())
    }, [])

    // Table Columns Array
    const columns = [
        {
            name: 'No',
            selector: (row, index) => index+1,
            sortable: true
        },
        {
            name: 'Employee Name',
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: 'Department',
            selector: (row) => row.department.length > 40 ? row.department.substring(0, 40) + ' .....' : row.department.substring(0, 40),
            sortable: true
        },
        {
            name: 'Salary',
            selector: (row) => row.salary,
            sortable: true
        },
        {
            name: <p className='text-end'>Action</p>,
            cell: row => <>
                <div style={{padding:'5px'}}>
                    <button type="button" className="btn btn-outline-primary" onClick={() => setEditValue(row)}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => dispatch(delete_Employee({id:row._id}))} style={{marginLeft:'10px'}}>Delete</button>
                </div>
            </>
        }
    ]

    const setEditValue = (row) => {
        dispatch({ type: Employee_Single_Data, payload: row })
        dispatch({ type: Employee_Modal_Status, payload: true })
        dispatch({ type: Edit_Count, payload: editCount + 1 }) 
        dispatch({ type: Employee_Status, payload: true }); 
    }

    

    return (
        <>
            <DataTable
                columns={columns}
                dense
                data={employeeData}
                paginationRowsPerPageOptions={[10, 15]}
                highlightOnHover
                noContextMenu
                pagination
                responsive
                subHeaderAlign="right"
                subHeaderWrap
                noDataComponent={"There are no data to display"}
            />
            <AddEmployee/>
        </>
    )
}

export default Employees