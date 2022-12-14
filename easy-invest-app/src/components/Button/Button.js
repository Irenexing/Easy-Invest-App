import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--secondary']
const SIZES = ['btn--small', 'btn--large']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <Link to= '/courses' className="btn-home">
        <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type }>{children}
        </button>
        </Link>
    )
};
