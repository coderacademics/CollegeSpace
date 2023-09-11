import React from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hat from './Pictures/graduation.png';
import Note from './note_mui';
import Navbar from "./Navbar";
import VerNav from "./ver_nav";
function Graduation() {
    return (
        <div className="slide3" id="graduation">
            <Navbar />
            <VerNav />
            <div className="container" style={{ display: "flex" , marginTop: "3em" }}>
                <div className="pic">
                    <img src={hat}/>
                </div>
                <div className="msg_slide3">
                    <h1 className="grad">Graduation</h1>
                    <p className="msg">You may leave college.But your college will never leave you. All the memories you have made, all the experiences you have gained and most importantly the friends you have made will stay with you forever in your life. Best of luck for the next phase of your life.</p>
                </div>
            </div>
            <div className="grad_notes" style={{ display: "flex", justifyContent: "space-around"}}>
                <Note initial="S" name="Suvrodip Mukherjee" note=" I'm really going to miss seeing happy faces after deadlines, missing early morning classes, skipping mess food on particular days, organising (and bringing massive crowds) to events and also begging professors for a deadline extension. These 4 years at IIIT Delhi have been the best years of my life and I've made many amazing friends. If I had a chance would I do it all over again? In a heartbeat." />
                <Note initial="T" name="Tirtharoop Banerjee" note=" I'm really going to miss seeing happy faces after deadlines, missing early morning classes, skipping mess food on particular days, organising (and bringing massive crowds) to events and also begging professors for a deadline extension. These 4 years at IIIT Delhi have been the best years of my life and I've made many amazing friends. If I had a chance would I do it all over again? In a heartbeat." />
            </div>
        </div>
    );
}
export default Graduation;