import React from "react";
import './index.css';

const Parallel = (props) => {
    let className = `Parallel Parallel_${props.view}`;
    if(props.id === props.parallelState) {
        className = className += ' Parallel_active';
    }

    const handleParallelChange = () => {
        props.setParallelState(props.id);
    }

        
    return (
        <span className={className} onMouseOver={handleParallelChange}>
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