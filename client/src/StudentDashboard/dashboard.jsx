import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard_Nav from "./dashboard_navbar";
import Horizontal_Nav from "./horizontal_Nav";
import { useNavigate } from "react-router";
import '../CSS styling/dashboard.css';
import Chatbot from '../Pictures/chatbot.png';
import { Link } from "react-router-dom";
import ProfileSection from "../Features/Profile/ProfileSection";
import ChatDashboard from "../Features/CommunityChat/ChatDashboard";
function Dashboard() {
    const Navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            Navigate('/signin');
        }
    },[])
    return (
        <div>
            <div className="dashboard_container">
                <Dashboard_Nav />
                <Horizontal_Nav />
            </div>
            <div className="components_container">
                <ProfileSection />
                <ChatDashboard />
            </div>
            <div className="chatbot_container" >
               <Link to="http://localhost:5000"><img src={Chatbot} className="chatbot"/></Link> 
            </div>
        </div>

    );
}
export default Dashboard;