
import React, { FC, useEffect } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
    Route,
    useNavigate,
    Routes,
    useLocation,
    MemoryRouter as Router,
    Navigate 
} from 'react-router-dom'


import Home from '../pages/home';
import Login from '../pages/Login';
import Register from '../pages/Register';


const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path="*" element={<Navigate to="/" />} />
                
            </Routes>
        </>
    );
}

export default MyRoutes;
