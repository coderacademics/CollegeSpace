import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS styling/AdminPagesCSS/NotificationUpload.css';
import { useNavigate } from "react-router";

function NotificationUpload() {
    const Navigate = useNavigate();
    const [notificationFormData, setnotificationFormData] = useState(
        {
            notificationName: "",
            notificationDetails: "",
            notificationDate:""
        }
    );
    const handleChange = (e) =>{
        e.preventDefault();
        let targetfield = e.target.name;
        let targetfieldValue = e.target.value;
        setnotificationFormData({...notificationFormData, [targetfield]: targetfieldValue});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(eventFormData));
        fetch('/admin@clgquora/notificationUpload', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notificationFormData)
        }).then((success) => {
            if (success.status === 409 || !success) {
                window.alert("Notification already added in the database!!");
            }
            else if (success.status === 422 || !success) {
                window.alert("Error Occured in adding the notification");
            }
            else {
                window.alert("Notification added successfully!");
                Navigate('/admindashboard');
            }
        }
        );
    }
    return (
        <div className="notificationuploadFormContainer">
            <div className="notificationuploadForm">
                <form onSubmit={handleSubmit}>
                    <h2 style={{fontSize:'2.5em'}}>Noification Upload Form</h2>
                    <div className='mb3 input'>
                        <label for="notificationName" class="form-label">Notification Heading</label>
                        <input type="text" name="notificationName" class="form-control" id="NotificationName" onChange={handleChange} required></input>
                    </div>
                    <div className='mb3 input'>
                        <label for="notificationDetails" class="form-label">Notification Details</label>
                        <textarea type="text" name="notificationDetails" class="form-control" id="NotificationDetails" onChange={handleChange} rows={5} required></textarea>
                    </div>
                    <div className='mb3 input'>
                        <label for="notificationDate" class="form-label">Date of release</label>
                        <input type="date" name="notificationDate" class="form-control" id="notificationDate" onChange={handleChange} rows={5} required></input>
                    </div>
                    <div className='mb5 mt-3 input'>
                        <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NotificationUpload;