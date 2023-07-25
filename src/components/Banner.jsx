import React from "react";

const Banner=(props)=>{
    return(
        <div className="bannerText">
                    <h1>{props.heading1}</h1>
                    <h3>{props.heading21}<span className="coloredText">{props.highlight}</span> {props.heading22}</h3>
                </div>
    );
}
export default Banner;