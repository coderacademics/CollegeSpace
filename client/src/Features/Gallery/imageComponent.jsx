import React from "react";
import '../../CSS styling/imageComponent.css'
function ImageComponent(props){
    return(
        <div className="image-container">
            <div className="image-box" >
                <img src={require('../../image_uploads/'+props.image)} ></img>
            </div>
            <div className="caption-box">
                <h6 >{props.caption}</h6>
            </div>
        </div>
    );
}

export default ImageComponent;