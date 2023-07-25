import React from "react";

const Heading = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.heading1}</h3>
            <h2>{props.heading2}</h2>
            <p>{props.details}</p>
        </div>
    )
}
export default Heading