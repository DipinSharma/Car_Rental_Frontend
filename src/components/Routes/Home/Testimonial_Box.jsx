import React from "react";

const TestimonialBox = (props) => {
    return (
        <div className={props.className}>
            <h4>{'"' + props.review + '"'}</h4>
            <div>
                <div className="userDetails">
                    <img src={props.src} alt=""></img>
                    <div>
                        <h4>{props.name}</h4>
                        <p>{props.location}</p>
                        <i class="fa-duotone fa-quote-left fa-beat-fade"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TestimonialBox;