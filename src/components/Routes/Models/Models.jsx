import React from "react";
import Banner from "../../Banner";
import Footer from "../../Footer";
import CarCard from "./CarCard";

const Models = () => {
    return (
        <div>
            <section className="Container">
                <div className="BackgroundIMG">
                    <div className="sudoIMG"></div>
                </div>

                <div className="HeroContainerText">
                    <h1>Vehicle Models</h1>
                    <h3><a href="/">Home</a>/Vehicle Models</h3>
                </div>
            </section>
            <section className="carModelContainer Container">
                <CarCard />
            </section>
            <section className="banner">
                <Banner heading1="Book a car by getting in touch with us" highlight="📞 +91 123-456-7890" />
            </section>
            <Footer />
        </div>
    );
}

export default Models;