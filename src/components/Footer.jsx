import React from "react";

const Footer = () => {
    return (
        <div className="Footer">

            <div className="FooterContent1">
                <h2>CAR Rental</h2>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                <a>📞+91 123-456-7890</a>
                <a>✉️carrental@gmail.com</a>
                <br />
                <strong>designed by dipin</strong>
            </div>
            <div className="FooterContent2">
                <h2>Company</h2>
                <p>New York</p>
                <p>Careers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How we work</p>
            </div>
            <div className="FooterContent2">
                <h2>Working Hours</h2>
                <p>Mon-Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 7:00PM</p>
                <p>Sun: Closed</p>
            </div>
            <div className="FooterContent2">
                <h2>SUBSCRIBE</h2>
                <h3>Subscribe your Email address for latest news &updates.</h3>
                <input type="text" className="Email" placeholder="Enter Email Address" />
                <button className="sublmitEmail">Submit</button>
            </div>
        </div>
    );
}
export default Footer;