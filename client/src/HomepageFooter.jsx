import React from "react";
import { ReactDOM } from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function HomepageFooter(props)
{
    return(
        <div className="footer">
            <li className="footer_items" style={{paddingRight: "1em"}}>
                {/* <img src={require(props.img)} className="profile_pic"></img> */}
            </li>
            <li className="footer_items">
               <b>{props.name}</b> <br />{props.post}</li>
            <li className="linkedInIcon footer_items"><LinkedInIcon /></li>
        </div>
    );
}
export default HomepageFooter;