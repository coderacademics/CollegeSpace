import React from 'react';
import axios from 'axios';
import './CSS styling/signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Image from './Pictures/Illustrations/form-bg.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Signin() {
    const Navigate = useNavigate();
    const [signinData, setSigninData] = useState({
        semail: "",
        spassword: ""
    });
    let field, fieldValue;
    const handleChange = (e) => {
        field = e.target.name;
        fieldValue = e.target.value;
        setSigninData({ ...signinData, [field]: fieldValue });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('/signin', signinData)
            .then((data) => {
                console.log(data.data.authToken);
                console.log(data);
                localStorage.setItem('token', data.data.authToken);
                localStorage.setItem('WebUserName', data.data.user);
                if (data.data.user === "admin001@gmail.com")
                    Navigate('/admindashboard');
                else
                    Navigate('/dashboard');
            })
            .catch((err) => {
                window.alert(err.response.data.message);

            })
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
            <div className='signinFormContainer '>
                <div className='signinForm'>
                    <div className='image-section'>
                        <img src={Image} />
                    </div>
                    <div className='signin-form-section'>
                        <form onSubmit={handleSubmit}>
                            <h1>Log In to Account</h1>
                            <div className='mb3 input'>
                                <label for="semail" class="form-label">Email</label>
                                <input type="email" name="semail" class="form-control" id="semail" aria-describedby="emailHelp" onChange={handleChange} value={signinData.semail} required></input>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className='mb3 input'>
                                <label for="spassword" class="form-label">Password</label>
                                <input type="password" name="spassword" class="form-control" id="spassword" aria-describedby="pwdHelp" onChange={handleChange} value={signinData.spassword} required></input>
                                <div id="pwdHelp" class="form-text">Strong Pasword is a combination of letter,numbers and special characters like _.& ,*</div>
                            </div>
                            <div className='mb5 mt-3 input'>
                                <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Sign In</button>
                            </div>
                        </form>
                        <div className='signup_section mt-4'>
                            <h6>Don't have an account?
                                <Link to="/signup" className='link-primary'>
                                    Sign Up
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Signin;