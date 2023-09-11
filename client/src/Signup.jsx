import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS styling/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Image from './Pictures/Illustrations/form-bg.png';
function Signup() {
    const Navigate = useNavigate();
    const [userData, setUserData] = useState({
        sname: "",
        semail: "",
        spassword: "",
        scpassword: "",
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
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then((success) => {
            if (success.status === 422 || !success) {
                window.alert("Error occurred in Signup.");
                Navigate('/signup')
            }
            else {
                window.alert("Signup Successfull!");
                Navigate('/signin');
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
            <div className='signupFormContainer'>
                <div className='signupForm'>
                    <div className='image-section'>
                        <img src={Image} />
                    </div>
                    <div className='signupform-section'>
                        <form onSubmit={handleSubmit}>
                            <h1 className='signup_heading'>Create Your Account</h1>
                            <div className='mb2 input'>
                                <label for="susername" class="form-label">Username</label>
                                <input name='susername' type="text" class="form-control" id="susername" onChange={handleChange} value={userData.username} required></input>
                            </div>
                            <div className='mb2 input'>
                                <label for="semail" class="form-label">Email</label>
                                <input name='semail' type="email" class="form-control" id="semail" aria-describedby="emailHelp" onChange={handleChange} value={userData.email} required></input>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className='mb2 input'>
                                <label for="sname" class="form-label">Name</label>
                                <input name='sname' type="text" class="form-control" id="sname" onChange={handleChange} value={userData.name} required></input>
                            </div>
                            <div className='mb2 input'>
                                <label for="scollege" class="form-label">Institute:</label>
                                <input name='scollege' type="text" class="form-control" id="scollege" onChange={handleChange} value={userData.institute} required></input>
                            </div>
                            <div className='mb2' style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'space-around' }}>
                                <label for="sdept" class="form-label">Department:</label>
                                <input name='sdept' type="text" class="form-control" id="sdept" style={{ width: '10vw' }} onChange={handleChange} value={userData.department} required></input>
                                <label for="sdob" class="form-label">Date-of-birth</label>
                                <input name='sdob' type="date" class="form-control" id="sdob" style={{ width: '10vw' }} onChange={handleChange} value={userData.dob} required></input>
                            </div>
                            <br></br>
                            <div className='mb2 input' style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'space-around' }}>
                                <label for="spassword" class="form-label">Password</label>
                                <input name='spassword' type="password" class="form-control" id="spassword" style={{ width: '10vw' }} aria-describedby="pwdHelp" onChange={handleChange} value={userData.password} required></input>
                                <label for="scpassword" class="form-label">Confirm Password</label>
                                <input name='scpassword' type="text" class="form-control" id="scpassword" style={{ width: '10vw' }} aria-describedby="pwdHelp" onChange={handleChange} value={userData.cpassword} required></input>
                            </div>
                            <div id="pwdHelp" class="form-text mb-2">Strong Pasword is a combination of letter,numbers and special characters like _.& ,*</div>
                            <div className='mb4 input'>
                                <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Create</button>
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

export default Signup;