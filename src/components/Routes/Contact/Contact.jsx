import React from "react";
import Banner from "../../Banner";
import Footer from "../../Footer";
const Contact = () => {
    return (
        <div>
            <section className="Container">
                <div className="BackgroundIMG">
                    <div className="sudoIMG"></div>
                </div>

                <div className="HeroContainerText">
                    <h1>Contact</h1>
                    <h3><a href="/">Home</a>/Contact</h3>
                </div>
            </section>
            <div className="contactContainer Container">
                <div className="contactTitle">
                    <h1>Need addition information</h1>
                    <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    <ol>
                        <li><a href="/">📞+91 123-456-7890</a></li>
                        <li><a href="/">✉️carrental@gmail.com</a></li>
                        <li><a href="/">Delhi,India</a></li>
                    </ol>
                </div>
                <div>
                    <form className="contactForm">
                        <label>Full Name</label>
                        <input type="text" placeholder="Ex: Dipin Sharma"></input>
                        <label>Email</label>
                        <input type="email" placeholder="youremail.com"></input>
                        <label>Tell us about it</label>
                        <textarea placeholder="write here"></textarea>
                        <button>send Message</button>
                    </form>
                </div>
            </div>
            <section className="banner">
                <Banner heading1="Book a car by getting in touch with us" highlight="📞 +91 123-456-7890" />
            </section>
            <Footer />
        </div>
    );
}

export default Contact;