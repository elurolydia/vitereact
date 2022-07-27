import React from "react";
import react from "../assets/react.svg"


export default function Navbar () {
    return (
        <nav className="nav">
            <div className="navFirst">
                <img src={react}/>
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}