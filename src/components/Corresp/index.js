import React from "react";
import HTMLToReact from "html-to-react";
import './index.css';




const Corresp = (props) => {
    return (
        <span className="Corresp">
            {["chiastic", "chapter"].includes(props.view) && props.parallelState && props.corresp && props.parallelState === props.corresp && 
                <div>
                    <h1>{props.id}</h1>
                    {props.children}
                </div>   
            }
            {["outline"].includes(props.view) && props.parallelState && props.corresp && props.parallelState === props.id && 
                <div>
                    {props.children}
                </div>   
            }

        </span>
    );
}

export default Corresp;

