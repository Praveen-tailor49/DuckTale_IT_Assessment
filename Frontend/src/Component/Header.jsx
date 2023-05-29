import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Edit_Count, Employee_Modal_Status, Employee_Single_Data, Employee_Status } from '../Redux/actionType';
import AddEmployee from './AddEmployee';

const Header = () => {
    // const cartData = useSelector((state) => state.Cart.cartData)
    const dispatch = useDispatch()
    const editCount = useSelector((state) => state.Employee.editCount)

    const addValue = () => {
        dispatch({ type: Edit_Count, payload: editCount + 1 })
        dispatch({ type: Employee_Modal_Status, payload: true }); dispatch({ type: Employee_Status, payload: false });
        dispatch({ type: Employee_Single_Data, payload: [] })
    }
    return (
        <>
            <Navbar style={{ background: '#39424e' }}>
                <Container>
                    <Navbar.Brand href="#home" style={{ color: '#1ba94c' }}>Ducktale Ass</Navbar.Brand>
                    <span><p style={{ color: '#1ba94c', cursor: 'pointer' }} onClick={addValue}>Add</p></span>
                </Container>
            </Navbar>
            <AddEmployee />
        </>
    )
}

export default Header


