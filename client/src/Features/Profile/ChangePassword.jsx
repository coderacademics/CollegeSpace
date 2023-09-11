import React from 'react';
import axios from 'axios';
import '../../CSS styling/changepassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Image from '../../Pictures/Illustrations/icons8-change-password-58.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function ChangePassword() {
    const Navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            Navigate('/signin');
        }
    },[])
    const userEmail = localStorage.getItem('WebUserName');
    const [userData, setUserData] = useState({
        semail: userEmail,
        spassword: "",
        snpassword: "",
        sncpassword: ""
    });
    let field, fieldValue;
    const handleChange = (e) => {
        field = e.target.name;
        fieldValue = e.target.value;
        setUserData({ ...userData, [field]: fieldValue });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        axios.post('/changepassword', userData)
            .then((success) => {
            if (success.status === 422 || !success) {
                window.alert("Error occurred while Updating Profile.");
                Navigate('/dashboard')
            }
            else {
                window.alert("Password Updation Successfull!");
                Navigate('/dashboard');
            }
        });
    }
    return (
        <div className='css_animation'>
            <ul class="animation_circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='profilePasswordFormContainer'>
                <div className='profilePasswordForm'>
                    <div className='passwordform-section'>
                        <form onSubmit={handleSubmit}>
                            <h1 className='password_heading'style={{ display: 'flex'}}>Password Update &nbsp;<img src={Image} className='pwd-image-section' /></h1>
                            
                            <div className='mb2 input'>
                                <label for="spassword" class="form-label">Old Password:</label>
                                <input name='spassword' type="password" class="form-control" id="spassword" onChange={handleChange} value={userData.spasswrod} required></input>
                            </div>
                            <div className='mb2 input'>
                                <label for="snpassword" class="form-label">New Password:</label>
                                <input name='snpassword' type="password" class="form-control" id="snpassword" onChange={handleChange} value={userData.snpassword} required></input>
                            </div>
                            <div className='mb2 input'>
                                <label for="sncpassword" class="form-label">Confirm New Password:</label>
                                <input name='sncpassword' type="text" class="form-control" id="sncpassword" onChange={handleChange} value={userData.sncpassword} required></input>
                            </div>
                            <br></br>
                            <div className='mb4 input'>
                                <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;