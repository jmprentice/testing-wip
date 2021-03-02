import { useHistory, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import updateLocation from '../../functions/updateLocation';
import './index.css';

const ViewOptions = (props) => {
    const history = useHistory();
    const location = useLocation();

    const handleViewSelect = (eventKey) => {      
        const newLocation = updateLocation(location, "view", eventKey);
        history.push(newLocation);
    }

  return (
    <div className="ViewOptions">
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
    </div>
  );
    
}

export default ViewOptions;
