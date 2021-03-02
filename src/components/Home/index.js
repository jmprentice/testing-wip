import React, { useState } from "react";
import HTMLToReact from "html-to-react";
import { useLocation } from "react-router-dom";
import ViewOptions from "../ViewOptions/index.js";
import Panel from '../Panel/index.js';
import TEI from '../TEI/index.js';
import Tools from '../Tools/index.js';
import Parallel from '../Parallel/index.js';
import Corresp from '../Corresp/index.js';
import getHtml from '../../resources/data.js';
import getSearchParams from '../../functions/getSearchParams.js';

import './index.css';

const Home = (props) => {
    const { search } = useLocation();
    const [ parallelState, setParallelState ] = useState();
    const [ view, setView ] = useState("chapter");
    const [ secondaryPanelVisibility, setSecondaryPanelVisibility ] = useState(false);

    const params = getSearchParams(search);
    if(params.view && params.view !== view)  {
        setView(params.view);
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
                return true;
            },
            processNode: processNodeDefinitions.processDefaultNode
        }
    ];
    const correspComponent = htmlToReactParser.parseWithInstructions(htmlInput, isValidNode, correspProcessingInstructions);

    
    return (
        <div>
            <ViewOptions view={view} params={params}/>
            <h1>{parallelState}</h1>
            <div className="content">
                <Panel size="medium">
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
                    { !parallelState &&
                        <p className="Home_hint">Hover over a section of the text to view its chiastic parallel in this panel.</p>
                    }
                    {correspComponent}  
                          
                </Panel>
          
            </div>
        </div>
    );
}

export default Home;