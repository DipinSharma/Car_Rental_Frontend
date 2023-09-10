import React from "react";

const DateInput = (props) => {
    return (
        <div className={props.className}>
            <label>{props.name}</label>
            <input type="date" className="dateInput"/>
        </div>
    )
}
export default DateInput;