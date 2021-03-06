import React, { Fragment } from "react";
import './index.css';




const Note = (props) => {
    return (
        <div className="Note">
            {props.parallelState && props.notesPerParallel[props.parallelState].includes(props.target) && 
                <span>
                    <sup>{props.target.replace(/^a0*/,"")}</sup> {props.children}
                </span>
            }
        </div>
    );
}

export default Note;

