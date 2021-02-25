import React from "react";
import './index.css';

const Panel = (props) => {
    return (
        <div className={`Panel-${props.size}`}>
            <h1>This is the {props.size} panel</h1>
            {props.children}
        </div>
    );
}

export default Panel;