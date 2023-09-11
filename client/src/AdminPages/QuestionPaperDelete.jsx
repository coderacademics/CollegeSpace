import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../CSS styling/AdminPagesCSS/EventDelete.css';
// import { response } from "express";

function QuestionPaperDelete() {
    const Navigate = useNavigate();
    const [FileDetails, setFileDetails] = useState([]);
    useEffect(() => {
        fetch('/fetchquestionpapers')
            .then(response => response.json())
            .then(data => {
                setFileDetails(data.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])
    return (
        <div className="eventDelete">
            <h1>List of all the Uploaded QuestionPapers</h1>
            <table className="table table-bordered border-dark event_table">
                <thead>
                    <tr>
                        <td><b>Question Paper Name</b></td>
                        <td><b>Semester</b></td>
                        <td><b>Examination</b></td>
                        <td><b>File Type</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {FileDetails.map((val, key) => {
                        return <tr key={key} className="">
                            <td className="">{val.questionpaper.name}</td>
                            <td className="">{val.Semester}</td>
                            <td className="">{val.Examination}</td>
                            <td className="">{val.questionpaper.contentType}</td>
                            <td><button className="btn btn-danger" onClick={
                                () => {
                                    fetch('/questionpaperdelete', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            name: val.questionpaper.name
                                        })
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            alert(data.data);
                                            fetch('/fetchquestionpapers')
                                                .then(response => response.json())
                                                .then(data => {
                                                    setFileDetails(data.data);
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

export default QuestionPaperDelete;