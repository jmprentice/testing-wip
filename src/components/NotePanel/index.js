import React from "react";
import './index.css';

const NotePanel = (props) => {
    
    return (
        <span className="NotePanel">
            {props.children}   
        </span>
    );
}

export default NotePanel;