import React from "react";
import './index.css';

const Parallel = (props) => {

    const handleParallelChange = () => {
        props.setParallelState(props.parallel);
    }
    
    
    return (
        <span className="Parallel" onMouseOver={handleParallelChange}>
         
            {props.children}
     

        </span>
    );
}

export default Parallel;