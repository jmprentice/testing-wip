import { useHistory, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import updateLocation from '../../functions/updateLocation';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import './index.css';

const ViewOptions = (props) => {
    const history = useHistory();
    const location = useLocation();

    const handleViewSelect = (eventKey) => {      
        const newLocation = updateLocation(location, "view", eventKey);
        history.push(newLocation);
    }

    const handleSourceToggle = event => {
        props.setSourcesVisible(event.target.checked);
    }

  return (
    <div >
        <AppBar position="static">
        <Tabs
        indicatorColor="secondary"
        textColor="primary"
        onChange={handleViewSelect}
        aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
            </AppBar>
        <div className = "ViewOptions_menu">
            <Nav variant="pills" activeKey={props.view} onSelect={handleViewSelect}>  
                <Nav.Item>
                    <Nav.Link eventKey="chapter" title="Chapter text">
                    Chapter text
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="chiastic" title="Chiastic text">
                    Chiastic text
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="outline" title="Chiastic outline">
                    Chiastic outline
                    </Nav.Link>
                </Nav.Item>
            </Nav> 
        </div>       
        <div>
            <Form.Group >
                <Form.Check type="checkbox" checked={props.sourcesVisible} label="Show documentary sources" onChange={handleSourceToggle}/>
                {props.sourcesVisible &&
                    <span>(<span className="yahwist">yahwist</span>, <span className="priestly">priestly</span>)</span>
                }
            </Form.Group>
            
        </div>
    </div>
  );
    
}

export default ViewOptions;
