import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import '../../CSS styling/galleryHomepage.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageComponent from "./imageComponent";
import axios from "axios";
function GalleryHomePage() {
    const Navigate = useNavigate();
    var data;
    const [images, setImages] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            Navigate('/signin');
        }
        else {
            axios.get('/images').then((res) => {
                data = res.data;
                setImages(data);
            })
        }
    }, [])
    return (
        <div className="galleryContainer">
            <h1>Gallery</h1>
            <div className="images">
                {
                    images.length > 0 ?
                        images.map((value, index) => {
                            return <ImageComponent image={value.image.name} caption={value.caption} />
                        }) :
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open
                        >
                            <h2>Loading</h2><CircularProgress color="inherit" />
                        </Backdrop>
                }
            </div>
            <button className="btn btn-primary gallery_upload_btn_user"><Link style={{ textDecoration: "none", color: "inherit" }} to="/imageUpload"><CloudUploadIcon />&nbsp;&nbsp;Upload</Link></button>
        </div>
    );
}
export default GalleryHomePage;