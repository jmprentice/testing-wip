import React from "react";
import './index.css';

const Panel = (props) => {
    return (
        <div className={`Panel-${props.size}`}>
            {props.children}
        </div>
    );
}

export default Panel;