import React from "react";
import Banner from "../../Banner";
import Footer from "../../Footer";
import Testimonial from "../../Testimonial";

const TestimonialPage = () => {
    return (
        <div>
            <section className="Container">
                <div className="HeroContainerText">
                    <h1>Testimonials</h1>
                    <h3><a href="/">Home</a>/Testimonials</h3>
                </div>
            </section>
            <Testimonial/>
            <section className="banner">
                <Banner heading1="Book a car by getting in touch with us" highlight="📞 +91 123-456-7890" />
            </section>
            <Footer />
        </div>
    );
}

export default TestimonialPage;