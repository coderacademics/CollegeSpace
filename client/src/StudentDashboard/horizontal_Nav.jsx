import React, { useEffect, useState } from "react";
import axios from "axios";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from "react-router";
function Horizontal_Nav() {
    const Navigate = useNavigate();
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const user = localStorage.getItem('WebUserName');
        console.log(user);
        axios.post('/profiledetails', {user:user})
          .then(response => {
            setProfile(response.data);
          })
          .catch(error => {
            console.error('Error fetching profiles:', error);
          });
      }, []);
    return (
        <div className="horizontal_Nav">
            <h1 style={{ marginLeft: '1em' }}>Welcome {profile.username}</h1>
            <div className="logout">
                <button className="btn btn-outline-dark" onClick={()=>{
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.alert("Logout Successful!!");
                    Navigate('/signin');
                }} >Log Out</button>
            </div>
        </div>
    );
}
export default Horizontal_Nav;