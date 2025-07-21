import React from "react";
import globeimg from "../images/globeimage.png";


export default function Nav(){

    return(
        <nav className="nav">
            <img src={globeimg} alt="globeimg" className="nav--image"/>
            <h2>My Travel Journal</h2>
        </nav>
    )
};