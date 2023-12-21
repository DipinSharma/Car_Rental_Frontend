import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("dflsj")
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <nav>
            <div>
                <img src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png" alt="logo" className="logo"></img>
            </div>
                <div className={`Links ${isMenuOpen ? "open" : ""}`}>
                    <Link onClick={toggleMenu} to="/">Home</Link>
                    <Link onClick={toggleMenu} to="about">About</Link>
                    <Link onClick={toggleMenu} to="models">vehicle models</Link>
                    <Link onClick={toggleMenu} to="testimonial">Testimonial</Link>
                    <Link onClick={toggleMenu} to="team">Our Team</Link>
                    <Link onClick={toggleMenu} to="contact">contact</Link>
                </div>
                <div>
                    <button className="signIn">Sign in</button>
                    <button className="logIn">Log in</button>
                </div>
            <div className="ham" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
            </div>
        </nav>
    )
}
export default Navbar;