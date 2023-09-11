import React from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomeFooter from './HomeFooter';
import Navbar from './Navbar';
import Hello from './hello';
import VerNav from "./ver_nav";
import Graduation from "./Graduation";
import Phases from "./Phases";
import Nostalgia from "./nostalgia";
function Homepage() {
    return (
        <div className="body">
            <Navbar color = "black" />
            <VerNav />
            <Hello />
            <Phases />
            <Graduation />
            <div className="bg_container">
                <Nostalgia />
                <HomeFooter />
            </div>
        </div>
    );
}
export default Homepage;