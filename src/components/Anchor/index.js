import React from "react";
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import Link from '@material-ui/core/Link';
import './index.css';




const Anchor = (props) => {

    const handleClick = () => {
        props.setNoteState(props.id)
        props.setNoteVisible(true);
        console.log(props.id);
    };
    return (
        <Link 
            component="button"
            
            onClick={handleClick}
        >
            <sup>
                n{props.id.replace(/^a0*/,"")}
            </sup>
        </Link>
    );
}

export default Anchor;

/*<ChatBubbleOutline 
                className="Anchor" 
                color="disabled"
                fontSize="small"
            />*/

