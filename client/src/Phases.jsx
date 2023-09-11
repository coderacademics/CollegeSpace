import { React, ReactDOM } from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Pictures/holi_phc.jpg';
import img2 from './Pictures/coding_phc.jpg';
import img3 from './Pictures/seminar_phc.jpg';
import img4 from './Pictures/graduation_phc.jpg';
import Navbar from "./Navbar";
import VerNav from "./ver_nav";
function Phases() {
    return (
        <div className="slide2" id="phases">
            <div class="container text-center" style={{marginBottom: "1em"}}>
                <div class="row m-3">
                    <div class="phases_Images col">
                        <img  src={img1}></img>
                    </div>
                    <div class="phases_Images col">
                        <img  src={img2} ></img>
                    </div>
                </div>
                <h1 style={{ textAlign: "center",fontSize:"3em", display: "block",fontWeight:700}}>Phases of College Life</h1>
                <div class="row m-2">
                    <div class="phases_Images col">
                        <img src={img3} ></img>
                    </div>
                    <div class="phases_Images col">
                        <img src={img4}  ></img>
                    </div>
                    <div class="phases_Images col">
                        <img src={img4}  ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Phases;