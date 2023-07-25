import React from "react";

const ICONBox = (props) => {
    return (
        <div className="iconBox">
            <img src="" alt="" />
            <div className="iconContent">
                <h4>{props.value}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default ICONBox;