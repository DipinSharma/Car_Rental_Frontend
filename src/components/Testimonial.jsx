import React from "react";
import TestimonialBox from "./Routes/Home/Testimonial_Box";
import Heading from "./Routes/Home/Heading";

const Testimonial=()=>{
    return(
        <section className="Container">
            <div>
                <Heading heading1="Reviewed by People" heading2="Client's Testimonials" details="Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you." className="testimonialTitle" />
            </div>
            <div className="testimonials">
                <TestimonialBox review="We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable." name="Parry Hotter" location="Belgrade" className="testimonialBox" src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" />
                <TestimonialBox review="The car was in great condition and made our trip even better. Highly recommend for this car rental website!" name="Ron Rizzly" location="Novi Sad" className="testimonialBox" src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" />
            </div>
        </section>
    );
}
export default Testimonial;