import React from 'react';
import axios from 'axios';
import '../../CSS styling/changeprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function ChangeProfile() {
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
        susername: "",
        sname: "",
        sdept: "",
        sdob: "",
        scollege: ""
    });
    let field, fieldValue;
    const handleChange = (e) => {
        field = e.target.name;
        fieldValue = e.target.value;
        setUserData({ ...userData, [field]: fieldValue });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        axios.post('/changeprofile', userData)
            .then((success) => {
            if (success.status === 422 || !success) {
                window.alert("Error occurred while Updating Profile.");
                Navigate('/dashboard')
            }
            else {
                window.alert("Profile Updation Successfull!");
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
            <div className='profileUpdateFormContainer'>
                <div className='profileUpdateForm'>
                    <div className='signupform-section'>
                        <form onSubmit={handleSubmit}>
                            <h1 className='signup_heading'>Update your Profile</h1>
                            
                            <div className='mb2 input'>
                                <label for="semail" class="form-label">Email</label>
                                <input name='semail' type="email" class="form-control" id="semail" aria-describedby="emailHelp" onChange={handleChange} value={userEmail} readOnly></input>
                                <div id="emailHelp" class="form-text">You cannot edit your Email.</div>
                            </div>
                            <div className='mb2 input'>
                                <label for="susername" class="form-label">Username</label>
                                <input name='susername' type="text" class="form-control" id="susername" onChange={handleChange} value={userData.username} required></input>
                            </div>
                            <div className='mb2 input'>
                                <label for="sname" class="form-label">Name</label>
                                <input name='sname' type="text" class="form-control" id="sname" onChange={handleChange} value={userData.name} required></input>
                            </div>
                            <div className='mb2 input'>
                                <label for="scollege" class="form-label">Institute:</label>
                                <input name='scollege' type="text" class="form-control" id="scollege" onChange={handleChange} value={userData.institute} required></input>
                            </div>
                            <div className='mb2'>
                                <label for="sdept" class="form-label">Department:</label>
                                <input name='sdept' type="text" class="form-control" id="sdept" style={{ width: '25vw' }} onChange={handleChange} value={userData.department} required></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div className='mb1' style={{ display: 'flex' }}>
                                <label for="sdob" class="form-label">Date-of-birth:&nbsp;&nbsp;</label>
                                <input name='sdob' type="date" class="form-control" id="sdob" style={{ width: '15vw' }} onChange={handleChange} value={userData.dob} required></input>
                            </div>
                            <div className='mb2 input'>
                                <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Update Profile</button>
                            </div>
                            <br></br>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangeProfile;