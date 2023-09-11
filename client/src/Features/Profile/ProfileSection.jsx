import React from 'react';
import axios from 'axios';
import '../../CSS styling/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function ProfileSection() {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const user = localStorage.getItem('WebUserName');
        axios.post('/profiledetails', {user:user})
          .then(response => {
            setProfile(response.data);
          })
          .catch(error => {
            console.error('Error fetching profile.');
          });
      }, []);
      const convertedDate = new Date(profile.date_of_birth).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    return (
        <div className='profileContainer'>
            <div className='profile-section'>
                <div className='profile-sec'>
                    <h1 className='profile-heading'>User Profile</h1>
                    {/* {profile.map((user,key) => { */}
                    <div className='profile-details'>
                        <h4>Name : {profile.name}</h4>
                        <h4>Email : {profile.userEmailAddress}</h4>
                        <h4>D.O.B : {convertedDate}</h4>
                        <h4>Department : {profile.department}</h4>
                        <h4>Institute : {profile.institute}</h4>
                    </div>
                    {/* })} */}
                    <div className='change-buttons'>
                        <Link to='/changeprofile'><button class='btn btn-outline-primary' style={{ margin: "1em 1em" }}>Update Profile</button></Link>
                        <Link to='/changepassword'><button class='btn btn-outline-primary' style={{ margin: "1em 1em" }}>Change Password</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;