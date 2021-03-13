import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './index.css';

const CorrespPanel = (props) => {
    
    return (
        <div className="CorrespPanel">
            <AppBar classname="CorrespPanel_banner" position="sticky" color="secondary">
            <Toolbar variant="dense">  
        
            
                {["chiastic", "chapter"].includes(props.view) &&
                    <span> 
                        <b>{props.correspState}</b> {props.parallelThemes[props.correspState]}
                    </span>
                }
                {["outline"].includes(props.view) &&
                    <span> 
                        <b>{props.parallelState}</b> {props.parallelThemes[props.parallelState]}
                    </span>
                }
                
            
            </Toolbar>
            </AppBar>
            <div className="CorrespPanel_content">
            { !props.parallelState &&
                <p className="Home_hint">Hover over a section of the text to view its chiastic parallel in this panel.</p>
            }
            {props.children}   
            </div>
        </div>
    );
}

export default CorrespPanel;