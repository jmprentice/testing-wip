import React from "react";
import './index.css';

const Parallel = (props) => {
    let className = `Parallel Parallel_${props.view}`;
    if(props.id === props.parallelState) {
        className = className += ' Parallel_active';
    }

    const handleParallelChange = (event) => {
        props.setParallelState(props.id);
        //event.stopPropagation();
    }

        
    return (
        <span className={className} onMouseOver={handleParallelChange}>
            {props.view === "chiastic" &&
                <h1>{props.id}</h1>
            }
            {props.view !== "outline" &&
                <span >
                    {props.children}
                </span>
            }
            {props.view === "outline" &&
                <span className="Parallel_theme">
                    <span className="Parallel_label">{props.id}</span> {props.theme}
                </span>
            }
            
     

        </span>
    );
}

export default Parallel;