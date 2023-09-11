import React, { useEffect, useState } from "react";
import UnderConstruction from "../../UnderConstruction";
import { Backdrop, CircularProgress } from "@mui/material";
import NotificationCard from "./NotificationCard";
import '../../CSS styling/FeaturesPagesCSS/notificationspage.css';
import { useNavigate } from "react-router";
function Notifications() {
    const Navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            Navigate('/signin');
        }
    }, [])
    const [notificationData, setNotificationData] = useState([]);
    useEffect(() => {
        fetch('/notifications', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setNotificationData(data.data);
            })
    }, []);
    return (
        <div>
            <h1>Important Notices : </h1>
            <div className="notificationsContainer">
                {
                    notificationData.length > 0 ?
                        notificationData.map((i) => {
                            return (
                                <NotificationCard notificationName={i.notificationName} notificationDetails={i.notificationDetails} date={i.notificationDate} />
                            )
                        })
                        :
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open
                        >
                            <h2>Loading</h2><CircularProgress color="inherit" />
                        </Backdrop>
                }
            </div>

        </div>
    );
}
export default Notifications;