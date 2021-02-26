import React from "react";
import HTMLToReact from "html-to-react";
import './index.css';




const Corresp = (props) => {
    return (
        <span className="Corresp">
            {props.parallelState && props.corresp && props.parallelState === props.corresp && 
                <div>
                    <h1>{props.id}</h1>
                    {props.children}
                </div>   
            }

        </span>
    );
}

export default Corresp;

