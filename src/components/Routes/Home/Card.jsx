import React from "react";

const Card = (props) => {
    return (
        <div className={props.className}>
            <img src={props.src} alt=""></img>
            <div className="userDetails">
                <h2>{props.Heading}</h2>
                <p>{props.details}</p>  
            </div>
        </div>
    )
}
export default Card