import React from "react";
import { useState,useEffect } from "react";
import '../CSS styling/AdminPagesCSS/NotificationDelete.css';
import { useNavigate } from "react-router";

function NotifcationDelete() {
  const Navigate = useNavigate();
  const [notificationdetails, setNotificationDetails] = useState([]);
  useEffect(() => {
    fetch('/fetchnotifications')
      .then(response => response.json())
      .then(data => {
        setNotificationDetails(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])
  return (
    <div className="notificationDelete">
      <h1>List of all the Notifications</h1>
      <table className="table table-bordered border-dark notification_table">
        <thead>
          <tr>
            <td><b>Notification Name</b></td>
            <td><b>Notification Details</b></td>
            <td><b>Date of Issue </b></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {notificationdetails.map((val, key) => {
            return <tr key={key} className="">
              <td className="">{val.notificationName}</td>
              <td className="">{val.notificationDetails}</td>
              <td className="">{val.notificationDate}</td>
              <td><button className="btn btn-danger" onClick={
                () => {
                  fetch('/notificationdelete', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      name: val.notificationName
                    })
                  })
                    .then(response => response.json())
                    .then(data => {
                      alert(data.data);
                      fetch('/fetchnotifications')
                        .then(response => response.json())
                        .then(data => {
                          setNotificationDetails(data.data);
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

export default NotifcationDelete;