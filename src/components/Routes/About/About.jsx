import React from "react";
import Heading from "../Home/Heading";
import ICONBox from "./IconBox";
import Plan from "../../Plan";
import Banner from "../../Banner";
import Footer from "../../Footer";

const About = () => {
    return (
        <div>
            <section className="Container">
            <div className="BackgroundIMG">
                    <div className="sudoIMG"></div>
                </div>
                
                <div className="HeroContainerText">
                    <h1>About</h1>
                    <h3><a href="/">Home</a>/About</h3>
                </div>
            </section>
            <section className="Container">
                <div className="aboutContainer">
                    <img src="https://car-rental-ten.vercel.app/static/media/about-main.ed0137841dc67d61ec95.jpg" alt="" className="leftImage"></img>
                    <div>
                        <Heading heading1="About Company" heading2="You start the engine and your adventure begins" details="Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended." className="aboutTitle"/>
                        <div className="aboutIcons">
                            <ICONBox value="20" description="Car Types" />
                            <ICONBox value="85" description="Rental Outlets" />
                            <ICONBox value="75" description="Repair Shops" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="planContainer Container">
                <Plan />
            </section>
            <section className="banner">
                <Banner heading1="Book a car by getting in touch with us" highlight="📞 +91 123-456-7890" />
            </section>
            <Footer />
        </div>
    );
}

export default About;