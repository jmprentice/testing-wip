import React, { Fragment } from "react";
import './index.css';




const Note = (props) => {
    return (
        <div className="Note">
            {props.noteState && props.target && props.noteState === props.target && 
                <span>
                    <sup>{props.target.replace(/^a0*/,"")}</sup> {props.children}
                </span>
            }
        </div>
    );
}

export default Note;

