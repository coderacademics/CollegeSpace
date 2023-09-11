import React from "react";
import './CSS styling/suppliespage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return (
        <div className="supplies_card">
            <a href={props.link} target="_blank" style={{ textDecoration:"none" , color: "black"}}>
                <div className="supplies_card_add_symbol">+1</div>
                <div className="supplies_card_image"><img src={props.pic}></img></div>
                <h3>{props.title}</h3>
                <p>{props.info}</p>
            </a>
        </div >
    );
}

export default Card;