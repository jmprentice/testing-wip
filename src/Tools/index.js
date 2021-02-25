import React from "react";
import { 
    Link,
    useLocation
  } from 'react-router-dom';
import updateLocation from '../functions/updateLocation.js'
const Tools = (props) => {

    const location = useLocation();

    return ( <div>
        <div>
          <hi>{props.params.name}</hi>
          <ul>
            <li>
              <Link to={updateLocation(location, "name", "netflix")}>Netflix</Link>
            </li>
            <li>
              <Link to={updateLocation(location, "name", "zillow")}>Zillow Group</Link>
            </li>
            <li>
              <Link to={updateLocation(location, "name", "yahoo")}>Yahoo</Link>
            </li>
            <li>
              <Link to={updateLocation(location, "name", "modus-create")} >Modus Create</Link>
            </li>
          </ul>

        </div>
      </div>);
}

export default Tools;