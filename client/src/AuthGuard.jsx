import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router";
// import authenticate from '../../middleware/authenticate';
import axios from 'axios';

const AuthGuard = ({ children }) => {
    const Navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        console.log(localStorage.getItem('token'));
        const jwtToken  = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        if (jwtToken) {
            // Perform JWT token validation on the server-side
            // You may need to send an API request to validate the token
            const isValidToken =   axios.post('/validateUser',(jwtToken,username))
            .then((data)=>{
               return data;
            })
            .catch((err)=>{
                return false;
            });
            if (isValidToken) {
                setIsAuthenticated(true);
            } else {
                // Invalid token, redirect to login page
                Navigate('/signin')
            }
        } else {
            // No token found, redirect to login page
            Navigate('/signin');
        }
    }, []);

    return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
