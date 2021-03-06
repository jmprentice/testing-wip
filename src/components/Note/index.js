import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import './index.css';




const Note = (props) => {
    const isSelected = props.noteState && props.target && props.noteState === props.target;
    const handleClose = () => props.setNoteVisible(false);
    let noteSections = props.note.split(/\s*(Alt\. Trans\.:.*|Comment\:.*)/);
        
    return (
        <div className="Note">
            {isSelected &&   
                <Modal show={props.noteVisible} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <span className="Note_label">
                            <sup>n{props.target.replace(/^a0*/,"")} </sup>
                            
                            {noteSections.map(section => {
                                return (
                                    <div className="Note_section">
                                        {section &&
                                            section
                                        }
                                    </div>
                                )
                            })}
                        </span>                  
                    </Modal.Header>           
                </Modal>
            }
        </div>
    );
}

export default Note;

