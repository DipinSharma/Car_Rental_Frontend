import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png" alt="logo" className="logo"></img>
            </div>
            <div className="Links">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="models">vehicle models</Link>
                <Link to="testimonial">Testimonial</Link>
                <Link to="team">Our Team</Link>
                <Link to="contact">contact</Link>
            </div>
            <div>
                <button className="signIn">Sign in</button>
                <button className="logIn">Log in</button>
            </div>
        </nav>
    )
}
export default Navbar;