import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import UploadIcon from '@mui/icons-material/CloudUpload';
import '../../CSS styling/galleryupload.css';
function ImageUpload() {
    const Navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            window.alert("Please log in to continue !!!");
            Navigate('/signin');
        }
    },[])
    const [imageUploadData, setImageUploadData] = useState({
        semail: "",
        caption:""
    });
    const [imageFileData,setImageFileData]=useState([])
    let field, fieldValue;
    const handleChange = (e) => {
        field = e.target.name;
        fieldValue = e.target.value;
        setImageUploadData({ ...imageUploadData, [field]: fieldValue });
    }
    const handleFileChange=(e) =>{
        fieldValue = e.target.files[0]
        console.log(fieldValue);
        setImageFileData({...imageFileData,fieldValue})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(Object.assign({}, imageUploadData, imageFileData)))
        fetch('/imageupload', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.assign({}, imageUploadData, imageFileData))
        }).then((response) => (response.json())
            .then((data) => {
                Navigate('/imageUpload')
            })
        );
    }
    return (
        <div className="form-section">
            <div className='galleryUpload_form'>
                <h1>Upload Image</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb3 input'>
                        <label for="semail" class="form-label">Email</label>
                        <input type="email" name="semail" class="form-control" id="semail" aria-describedby="emailHelp" onChange={handleChange} required></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mb3 input upload' >
                        <div className='icon'> <UploadIcon /></div>
                        <label class="form-label" for="customFile" style={{ textAlign: 'true' }}>Upload File</label>
                        <input type="file" class="form-control" id="customFile" name="image" multiple='false' onChange={handleFileChange} hidden='true' />
                    </div>
                    <div className='mb2 mt2 input'>
                        <label for="caption" class="form-label">Caption</label>
                        <textarea type="text" name="caption" class="form-control" id="caption" onChange={handleChange} required ></textarea>
                    </div>
                    <div className="note mt2">
                        <p><b>NOTE:</b><i>All the pictures that you upload here will be viewed by all the users of this community.So share only those pictures which doesn't display any confidential information like bank account details, password and so on.</i></p>
                    </div>
                    <div className='mb2 mt-2 input'>
                        <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ImageUpload;