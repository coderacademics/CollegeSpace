import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import UnderConstruction from "../../UnderConstruction";
import EventCard from "./EventCard";
import '../../CSS styling/FeaturesPagesCSS/eventspage.css';
import { useNavigate } from "react-router";
function Events() {
    const Navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            Navigate('/signin');
        }
    }, [])
    const [eventData, setEventData] = useState([]);
    useEffect(() => {
        fetch('/events', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setEventData(data.data);
            })
    }, []);
    return (
        <div>
            <h1>UpComing Events</h1>
            {
                eventData.length > 0 ? <div className="eventsContainer">
                    {
                        eventData.map((i) => {
                            return (
                                <EventCard eventName={i.eventName} eventDetails={i.eventDetails} />
                            )
                        })}
                </div> : <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open
                >
                    <h2>Loading Events</h2><CircularProgress color="inherit" />
                </Backdrop>
            }


        </div>
    );
}
export default Events;