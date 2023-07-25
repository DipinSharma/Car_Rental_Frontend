import React from "react";

const Dropdown = (props) => {
    return (
        <div className={props.className}>
            <label>{props.name}</label>
            <select>
                <option></option>
            </select>
        </div>
    )
}
export default Dropdown;