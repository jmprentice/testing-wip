import React, { useState } from "react";
import HTMLToReact from "html-to-react";

import { useLocation } from "react-router-dom";
import ViewOptions from "../ViewOptions/index.js";
import Panel from '../Panel/index.js';
import TEI from '../TEI/index.js';
import Anchor from '../Anchor/index.js';
import Parallel from '../Parallel/index.js';
import Corresp from '../Corresp/index.js';
import CorrespPanel from '../CorrespPanel/index.js';
import NotePanel from '../NotePanel/index.js';
import Note from '../Note/index.js';
import getHtml from '../../resources/data.js';
import getSearchParams from '../../functions/getSearchParams.js';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './index.css';



const Home = (props) => {
    const { search } = useLocation();
    const [ parallelState, setParallelState ] = useState();
    const [ view, setView ] = useState("chapter");
    const [ secondaryPanelVisibility, setSecondaryPanelVisibility ] = useState(false);
    const [ noteState, setNoteState ] = useState("");

    const params = getSearchParams(search);
    if(params.view && params.view !== view)  {
        setView(params.view);
    }

    const htmlInput = getHtml();

    const domParser = new DOMParser();
    const doc = domParser.parseFromString(htmlInput, "text/html");
    const parallels = doc.querySelectorAll('tei-div[type="parallel"]');
    const notesPerParallel = {};
    parallels.forEach( parallel => {
        const parallelId = parallel.getAttribute("id").replace(/pr/g,"'").replace("#","");
        notesPerParallel[parallelId] = [];
        const anchors = parallel.querySelectorAll('tei-anchor');

        anchors.forEach( anchor => {
            const anchorId = anchor.getAttribute("id").replace(/#a0*/,"");
            notesPerParallel[parallelId].push(anchorId);
        })
    });

    const htmlToReactParser = new HTMLToReact.Parser();
    const isValidNode = () => { return true; };
    const processNodeDefinitions = new HTMLToReact.ProcessNodeDefinitions(React);
    const processingInstructions = [
        {
            shouldProcessNode: node => {
                return node.name === 'tei-seg' && node.attribs.type === 'verse';
            },
            processNode: (node, children) => {
                return <sup>{children}</sup>;
            }
        },
        {
            shouldProcessNode: node => {
                return node.name === 'tei-anchor';
            },
            processNode: (node, children) => {
                const id = node.attribs["id"];
                return (
                    <Anchor
                        id={id}
                        setNoteState={setNoteState}
                    />
                );
            }
        },
        {
            shouldProcessNode: node => {
                return node.name === 'tei-div' && node.attribs && node.attribs.type === 'parallel';
            },
            processNode: (node, children) => {
                return (
                    <Parallel 
                        parallelState={parallelState}
                        setParallelState={setParallelState}
                        id={node.attribs && node.attribs.id && node.attribs.id.replace(/pr/g,"'")}
                        view={view}  
                        theme="This is where the theme would go"                      
                    >
                        {children}
                    </Parallel>
                );
            }
        },
        {
            shouldProcessNode: node => {
                return true;
            },
            processNode: processNodeDefinitions.processDefaultNode
        }
    ];
    const reactComponent = htmlToReactParser.parseWithInstructions(htmlInput, isValidNode, processingInstructions);

 
    const correspProcessingInstructions = [
        
        {
            shouldProcessNode: node => {
                return node.name === 'tei-seg' && node.attribs.type === 'verse';
            },
            processNode: (node, children) => {
                return <sup>{children}</sup>;
            }
        },
        {
            shouldProcessNode: node => {
                return (
                    node.name === 'tei-div' && 
                    node.attribs && 
                    node.attribs.type === 'parallel' &&
                    node.parent && (!node.parent.attribs || node.parent.attribs.type !== 'parallel')
                );
            },
            processNode: (node, children) => {
                return (
                    <Corresp 
                        id={node.attribs && node.attribs.id && node.attribs.id.replace(/pr/g,"'")}
                        corresp={node.attribs && node.attribs.corresp && node.attribs.corresp.replace(/pr/g,"'").replace('#','')} 
                        parallelState={parallelState}
                        view={view}
                    >
                        {children}
                    </Corresp>
                );
            }
        },
        {
            shouldProcessNode: node => {
                return node.name !== 'tei-back' && node.name !== 'tei-header' && node.name !== 'tei-head';
            },
            processNode: processNodeDefinitions.processDefaultNode
        }
    ];
    const correspComponent = htmlToReactParser.parseWithInstructions(htmlInput, isValidNode, correspProcessingInstructions);

    const noteProcessingInstructions = [
        
        {

            shouldProcessNode: node => {
                
                return (
                    node.name === 'tei-note' && 
                    node.attribs 
                );
            },
            processNode: (node, children) => {
                return (
                    <Note
                        target={node.attribs.target && node.attribs.target.replace(/#/g,"")}
                        noteState={noteState}
                        notesPerParallel={notesPerParallel}
                        parallelState = {parallelState}
                    >
                        {[children[1]]}
                    </Note>
                    
                );
            }
        },
        {
            shouldProcessNode: node => {
                return node.name !== 'tei-body' && node.name !== 'tei-header' && 
                    (!node.attribs || node.attribs.type !== 'editorial');
            },
            processNode: processNodeDefinitions.processDefaultNode
        }
    ];
    const noteComponent = htmlToReactParser.parseWithInstructions(htmlInput, isValidNode, noteProcessingInstructions);

    

    return (
        <div>
            <ViewOptions view={view} params={params}/>
            <div className="Home_content">
                <Panel size="large">
                    <TEI 
                        view={view} 
                        children={reactComponent} 
                    />
                </Panel> 
      
                <Panel 
                    size="medium" 
                    visibility={secondaryPanelVisibility}
                    setVisibility={setSecondaryPanelVisibility}
                >
                      <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        Chiastic Parallel
                        </AccordionSummary>
                        <AccordionDetails>
                       
                        { !parallelState &&
                        <p className="Home_hint">Hover over a section of the text to view its chiastic parallel in this panel.</p>
                    }
                    <CorrespPanel>
                        {correspComponent}
                    </CorrespPanel> 
                       
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded="true"
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        Notes
                        </AccordionSummary>
                        <AccordionDetails>
                       
                        { !parallelState &&
                        <p className="Home_hint">Click on a speech bubble in the text to view the note.</p>
                    }
                   <NotePanel>
                        {noteComponent}
                    </NotePanel>
                       
                        </AccordionDetails>
                    </Accordion>
                    
                    
                    
                </Panel>
          
            </div>
        </div>
    );
}

export default Home;