import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../CSS styling/AdminPagesCSS/EventDelete.css';
// import { response } from "express";

function EventDelete() {
    const Navigate = useNavigate();
    const [eventsDetails, setEventDetails] = useState([]);
    useEffect(() => {
        fetch('/fetchevents')
            .then(response => response.json())
            .then(data => {
                setEventDetails(data.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])
    return (
        <div className="eventDelete">
            <h1>List of all the Events</h1>
            <table className="table table-bordered border-dark event_table">
                <thead>
                    <tr>
                        <td><b>Event Name</b></td>
                        <td><b>Event Details</b></td>
                        <td><b>Website Link</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {eventsDetails.map((val, key) => {
                        return <tr key={key} className="">
                            <td className="">{val.eventName}</td>
                            <td className="">{val.eventDetails}</td>
                            <td className="">{val.eventLink}</td>
                            <td><button className="btn btn-danger" onClick={
                                () => {
                                    fetch('/eventdelete', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            name: val.eventName
                                        })
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            alert(data.data);
                                            fetch('/fetchevents')
                                                .then(response => response.json())
                                                .then(data => {
                                                    setEventDetails(data.data);
                                                })
                                                .catch(error => {
                                                    console.error('Error:', error);
                                                });
                                        })
                                        .catch(error => {
                                            console.error('Error:', error);
                                        });
                                }
                            }>Delete</button></td>
                        </tr>;
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EventDelete;