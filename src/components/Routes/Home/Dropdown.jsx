import React from "react";

const Dropdown = (props) => {
    return (
        <div className={props.className}>
            <label>{props.name}</label>
            <select>
            <option key="-1">{props.default}</option>
                {props.options&&props.options.map((item,index)=>(
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    )
}
export default Dropdown;