import React from "react";
import loactionicon from "../images/redicon.jpg";

export default function Card(props){
    const [isShown,setIsShown] = React.useState(false)
    function handleClick(){
        setIsShown(value => !value)
        console.log(isShown)
    }

    // state and function for conditional rendering
    const [messages, setMessages] = React.useState(["a"])

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
                {isShown && <p className="card--text">{props.text}</p>}
                {messages.length===0 ? <h1>You're all caught up! </h1>
                 : <h1>You have {messages.length} unread message{messages.length==1? "":'s'} </h1>}
                <button onClick={handleClick}>{!isShown? "Show Description" : "Hide Description"}</button>
            </div>
        </div>
    )
}