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
import Note from '../Note/index.js';
import getHtml from '../../resources/data.js';
import getSearchParams from '../../functions/getSearchParams.js';

import './index.css';



const Home = (props) => {
    const { search } = useLocation();
    const [ parallelState, setParallelState ] = useState();
    const [ correspState, setCorrespState ] = useState();
    const [ view, setView ] = useState("chapter");
    const [ secondaryPanelVisible, setSecondaryPanelVisible ] = useState(false);
    const [ sourcesVisible, setSourcesVisible ] = useState(false);
    const [ noteState, setNoteState ] = useState("");
    const [ noteVisible, setNoteVisible ] = useState(false);

    const params = getSearchParams(search);
    if(params.view && params.view !== view)  {
        setView(params.view);
    }

    const parallelThemes= {
        "A": "6:1-4 Sexual wickedness, God proclaims a limit",
        "B": '6:5: God observes man’s heart is “evil continually”',
        "C": '6:6-8 God speaks in “His heart”',
        "D": '6:9-10 Generations',
        "E": '6:11-18a Instructions re: preserving life, covenant with Noah',
        "F": '6:18b-7:10 Seven days; God commands, Noah obeys and enters ark',
        "G": '7:11 God opens window',
        "H": '7:12-17a Forty days',
        "I": '7:17b-20 Waters increase, mountains covered',
        "J": 'Death, a hundred fifty days',
        "J'": 'Life, a hundred fifty days',
        "I'": 'Life, a hundred fifty days',
        "H'": '8:6a Forty days',
        "G'": '8:6b Noah opens window',
        "F'": '8:7-20 Seven days; God commands, Noah obeys and exits ark',
        "C'": '8:21a God speaks in “His heart”',
        "B'": '8:21b-22 God observes man’s heart is “evil from his youth”',
        "E'": '9:1-17 Instructions re: taking of life, covenant with all living',
        "D'": '9:18-19 Generations',
        "A'": '9:20-9:28 Sexual wickedness, Noah proclaims a limit'
    };

    const parallelLevels = { 
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "J'": 10,
        "I'": 9,
        "H'": 8,
        "G'": 7,
        "F'": 6,
        "C'": 3,
        "B'": 2,
        "E'": 5,
        "D'": 4,
        "A'": 1
    }



    const htmlInput = getHtml();
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
                        setNoteVisible={setNoteVisible}
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
                const id = node.attribs && node.attribs.id ? node.attribs.id.replace(/pr/g,"'") : "";
                const corresp = node.attribs && node.attribs.corresp ? node.attribs.corresp.replace(/pr/g,"'").replace('#',''): "";
                return (
                    <Parallel 
                        key={id}
                        parallelState={parallelState}
                        setParallelState={setParallelState}
                        setCorrespState={setCorrespState}
                        id={id}
                        corresp={corresp} 
                        view={view}  
                        theme={parallelThemes[id]}     
                        level={parallelLevels[id]}                 
                    >
                        {children}
                    </Parallel>
                );
            }
        },
        {

            shouldProcessNode: node => {
                
                return (
                    node.name === 'tei-note' && 
                    node.attribs 
                );
            },
            processNode: (node, children) => {
                let note = node.childNodes[1].childNodes[0].data;
                note = note.replace(/^\(/, "");
                note = note.replace(/\)$/, "");
                return (
                    <Note
                        target={node.attribs.target && node.attribs.target.replace(/#/g,"")}
                        noteState={noteState}
                        noteVisible={noteVisible}
                        setNoteVisible={setNoteVisible}
                        note={note}
                    >
                        
                    </Note>
                    
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

    return (
        <div className={`sources-${sourcesVisible}`}>
            <ViewOptions 
                view={view} 
                params={params}
                sourcesVisible={sourcesVisible}
                setSourcesVisible={setSourcesVisible}
            />
            <div className="Home_content">
                <Panel size="large">
                    <TEI 
                        view={view} 
                        children={reactComponent} 
                        parallelState={parallelState}
                        parallelThemes={parallelThemes}
                    />
                </Panel>      
                <Panel 
                    size="medium" 
                    visibility={secondaryPanelVisible}
                    setVisibility={setSecondaryPanelVisible}
                >                            
                    
                    <CorrespPanel 
                        parallelState={parallelState}
                        correspState={correspState}
                        parallelThemes={parallelThemes}
                        view={view}
                    >
                        {correspComponent}
                    </CorrespPanel>       
                </Panel>          
            </div>
        </div>
    );
}

export default Home;