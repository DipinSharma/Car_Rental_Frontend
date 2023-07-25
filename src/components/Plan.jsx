import React from "react";
import Heading from "./Routes/Home/Heading";
import Card from "./Routes/Home/Card";
const Plan = () => {
    return (
        <div>
            <Heading heading1="plan Your trip now" heading2="Quick and easy rental" className="planContainerTitle" />
            <div className="planCardBox">
                <Card Heading="Select Car" details="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs" src="" className="planCard" />
                <Card Heading="Contact Operator" details="Our knowledgeable and friendly operators are always ready to help with any questions or concerns" className="planCard" />
                <Card Heading="Let's Drive" details="Whether you're hitting the open road, we've got you covered with our wide range of cars" className="planCard" />

            </div>

        </div>
    );
}
export default Plan