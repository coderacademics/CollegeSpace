import React , {useState}from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import vectorGraphics from './Pictures/Slide1_illustration.png';

function Hello() {
    const [rotation, setRotation] = useState(0);

    return (
        <div className="slide1" id="hello" style={{ display: 'flex' }}>
            <div className="slide1_text_part" >
                <div className="slide1_hello" id="slide1_Hello">
                    Hello
                </div>
                <div className="slide1_message">
                    Welcome to the utlimate guidebook for your CollegeLife.The guidebook helps you multiple strategies
                    that other student use, their experiences and stories, tools you can use to help you along the way and much more!!
                </div>
            </div>
            <div className="vector_part" style={{ height: '95vh', width: '50vw' }}>
                <img src={vectorGraphics} />
            </div>
        </div>
    );
}
export default Hello;