import React from "react";
import './index.css';

const TEI = (props) => {

    return (
        <div className="TEI">

            <div className={`${props.view}-view` } >
                {props.children}
            </div>

        </div>
    );
}

export default TEI;
