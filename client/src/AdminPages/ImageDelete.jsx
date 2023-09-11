import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import '../CSS styling/AdminPagesCSS/EventDelete.css';
// import { response } from "express";

function ImageDelete() {
    const Navigate = useNavigate();
    const [ImageDetails, setImageDetails] = useState([]);
    useEffect(() => {
        fetch('/fetchimages')
            .then(response => response.json())
            .then(data => {
                setImageDetails(data.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])
    return (
        <div className="eventDelete">
            <h1>List of all the Uploaded Images</h1>
            <table className="table table-bordered border-dark event_table">
                <thead>
                    <tr>
                        <td><b>Image File Name</b></td>
                        <td><b>Image Caption</b></td>
                        <td><b>File Type</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {ImageDetails.map((val, key) => {
                        return <tr key={key} className="">
                            <td className="">{val.image.name}</td>
                            <td className="">{val.caption}</td>
                            <td className="">{val.image.contentType}</td>
                            <td><button className="btn btn-danger" onClick={
                                () => {
                                    fetch('/imagedelete', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            name: val.image.name
                                        })
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            alert(data.data);
                                            fetch('/fetchimages')
                                                .then(response => response.json())
                                                .then(data => {
                                                    setImageDetails(data.data);
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

export default ImageDelete;