import React from "react";
import ExploreIcon from '@mui/icons-material/Explore';
import FileUpload from '@mui/icons-material/FileUpload';
import LocalMall from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import Logo from './Pictures/logo_white_navbar.png'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="nav" style={{ position: "fixed", top: 0, color: `${props.color}` }} >
            <div className="navlinks" style={{ listStyle: "none", display: "flex" }}>
                <li><img src={Logo} style={{height:"3vh" , width:"25vh" ,position:"absolute", left: "0.7em" }}/></li>
                <li style={{ display: "flex" }}>
                    <Link to="/" className="link">
                        <ExploreIcon />Explore
                    </Link>
                </li>
                <li style={{ display: "flex" }}>
                    <Link to="/supplies" className="link">
                        <LocalMall />Supplies
                    </Link>
                </li>
                <li style={{ display: "flex" }}>
                    <Link to="/signin" className="link">
                        <LoginIcon /> Sign&nbsp;in
                    </Link>
                </li>
            </div>
        </div>
    );
}
export default Navbar; 