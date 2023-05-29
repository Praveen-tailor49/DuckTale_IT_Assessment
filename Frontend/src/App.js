import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify'; 

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>} />
          </Routes>
          <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
