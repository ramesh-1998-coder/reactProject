import React from "react";
import loactionicon from "../images/redicon.jpg";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.img.src} alt={props.img.alt} className="card--image"/>
            <div className="card--details">
                <div className="map--row">
                    <img src={loactionicon} alt="location" className="location--img"/>
                    <h5 className="card--country">{props.country}</h5>
                    <a href={props.googleMapsLink} target="_blank"><h6 className="card--maptext">View on Google Maps</h6></a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--dates">{props.dates}</p>
                <p className="card--text">{props.text}</p>
            </div>
        </div>
    )
}