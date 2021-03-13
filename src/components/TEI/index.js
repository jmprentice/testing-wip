import React from "react";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './index.css';

const TEI = (props) => {

    return (
        <div className="TEI">
            <AppBar position="sticky" color="secondary">
            <Toolbar variant="dense">  
                <span> 
                   <b>{props.parallelState}</b> {props.parallelThemes[props.parallelState]}
               </span>
            </Toolbar>
            </AppBar>
            <div className="TEI_banner">
                            </div>
            <div className={`${props.view}-view` } >
                <Paper className="TEI_paper"
                    square={false}
                    elevation={5}
                >
                    {props.children}
                </Paper>
            </div>

        </div>
    );
}

export default TEI;
