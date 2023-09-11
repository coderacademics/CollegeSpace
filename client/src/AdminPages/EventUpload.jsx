import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS styling/AdminPagesCSS/EventUpload.css';
import { useNavigate } from "react-router";

function EventUpload() {
    const Navigate = useNavigate();
    const [eventFormData, seteventFormData] = useState(
        {
            eventName: "",
            eventDetails: "",
            eventLink: ""
        }
    );
    const handleChange = (e) =>{
        e.preventDefault();
        let targetfield = e.target.name;
        let targetfieldValue = e.target.value;
        seteventFormData({...eventFormData, [targetfield]: targetfieldValue});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(eventFormData));
        fetch('/admin@clgquora/eventUpload', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventFormData)
        }).then((success) => {
            // console.log(success);
            if (success.status === 409 || !success) {
                window.alert("Event already exists in the database!!");
            }
            else if (success.status === 422 || !success) {
                window.alert("Error Occured in Uploading");
            }
            else {
                window.alert("Event Added Successfull!");
                Navigate('/admindashboard');
            }
        }
        );
    }
    return (
        <div className="eventuploadFormContainer">
            <div className="eventuploadForm">
                <form onSubmit={handleSubmit}>
                    <h2>Event Upload Form</h2>
                    <div className='mb3 input'>
                        <label for="eventName" class="form-label">Event Name</label>
                        <input type="text" name="eventName" class="form-control" id="EventName" onChange={handleChange} required></input>
                    </div>
                    <div className='mb3 input'>
                        <label for="eventDetails" class="form-label">Event Details</label>
                        <textarea type="text" name="eventDetails" class="form-control" id="EventDetails" onChange={handleChange} rows={5} required></textarea>
                    </div>
                    <div className='mb3 input'>
                        <label for="eventLink" class="form-label">Website Link</label>
                        <input type="text" name="eventLink" class="form-control" id="link" onChange={handleChange} required></input>
                    </div>
                    <div className='mb5 mt-3 input'>
                        <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EventUpload;