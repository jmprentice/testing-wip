import React, { Fragment } from "react";
import './index.css';

const Parallel = (props) => {
    let className = `Parallel Parallel_${props.view}`;
    if(props.id === props.parallelState) {
        className = className += ' Parallel_active';
    }

    const handleParallelChange = (event) => {
        props.setParallelState(props.id);
        props.setCorrespState(props.corresp);
       //event.stopPropagation();
    }

        
    return (
        <Fragment>
        {props.view !== "outline" &&
            <span className={className} tabindex="0" onMouseOver={handleParallelChange} onFocus={handleParallelChange}>
                {props.view === "chiastic" &&
                    <p>{props.id}</p>
                }
                <span >
                    {props.children}
                </span>
            </span>
        }
        {props.view === "outline" &&
            <div className={className} tabindex="0"  onMouseOver={handleParallelChange} onFocus={handleParallelChange}>
                <span className={`Parallel_theme Parallel_${props.level}`}>
                    <span className="Parallel_label">{props.id}</span> {props.theme}
                </span>
            </div>
        }
        </Fragment>
    );
}

export default Parallel;