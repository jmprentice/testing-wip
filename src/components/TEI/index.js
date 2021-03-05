import React from "react";
import Paper from '@material-ui/core/Paper';
import './index.css';

const TEI = (props) => {

    return (
        <div className="TEI">

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
