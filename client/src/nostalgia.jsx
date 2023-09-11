import React from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './note_mui';
import heart from './Pictures/nostal.png';
import Navbar from "./Navbar";
import VerNav from "./ver_nav";


function nostalgia() {
    return (
        <div className="slide4" id="nostalgia">
            <Navbar/>
            <VerNav/>
            <div className="container" style={{ display: "flex" }}>
                <div className="nostalgia">
                    <img src={heart} height="300px" width={"350px"} />
                </div>
                <div className="msg_slide4">
                    <h3 className="nostal">Nostalgia</h3>
                    <p className="msg">From Odyssey to mid-sems, morning classes to late night movie sessions, mess to brew bakes, impromptu travel plans to midnight parantha breaks - come take a trip down the memory lane with us and relive some of your favourite moments.</p>
                </div>
            </div>
            <div className="nostal_notes" style={{ display: "flex", justifyContent: "space-around" }}>

                <Note initial="R" name="Richard Sams" note=" I'm really going to miss seeing happy faces after deadlines, missing early morning classes, skipping mess food on particular days, organising (and bringing massive crowds) to events and also begging professors for a deadline extension. These 4 years at IIIT Delhi have been the best years of my life and I've made many amazing friends. If I had a chance would I do it all over again? In a heartbeat." />
                <Note initial="R" name="Richard Sams" note=" I'm really going to miss seeing happy faces after deadlines, missing early morning classes, skipping mess food on particular days, organising (and bringing massive crowds) to events and also begging professors for a deadline extension. These 4 years at IIIT Delhi have been the best years of my life and I've made many amazing friends. If I had a chance would I do it all over again? In a heartbeat." />
            </div>
        </div>
    );
}
export default nostalgia;