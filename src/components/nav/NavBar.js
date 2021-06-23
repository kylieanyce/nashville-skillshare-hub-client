import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

// collapsible top nav bar menu
export const NavBar = (props) => {
    const myFunction = (event) => {
        event.preventDefault()
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <div className="navbar topnav" id="myTopnav">
            <Link to="/" className="active">Home</Link>
            <Link to="/events/myevents" className="active">My Events</Link>
            <Link to="/events/mybookmarks" className="active">Bookmarks</Link>
            <Link to="/login" className="active">Logout</Link>
            <a className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}