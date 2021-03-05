import React from "react";
import './index.css';

const CorrespPanel = (props) => {
    
    return (
        <span className="CorrespPanel">
            {props.children}   
        </span>
    );
}

export default CorrespPanel;