import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './CSS styling/homepage.css';
import CircleIcon from '@mui/icons-material/Circle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

function VerNav() {
    return (
        <div className="nav_vertical" style={{ position: "fixed" }} >
            <div className="navlinks_v" style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
                <li style={{ cursor: "pointer"}}>
                    <Link smooth to="#hello"  className="ver_link"><CircleIcon /></Link>
                </li>
                <li style={{ cursor: "pointer" }}>
                    <Link smooth to="#phases" className="ver_link"><CircleIcon /></Link>
                </li>
                <li style={{ cursor: "pointer" }}>
                    <Link smooth to="#graduation" className="ver_link"><CircleIcon /></Link>
                </li>
                <li style={{ cursor: "pointer" }}>
                    <Link smooth to="#nostalgia" className="ver_link"><CircleIcon /></Link>
                </li>
            </div>
        </div>
    );

}
export default VerNav;
