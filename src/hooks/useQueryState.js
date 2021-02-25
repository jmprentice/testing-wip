import qs from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";

const useQueryState = (initialState, paramName, serialize) => {
    const history = useHistory();
    const { pathname, search } = useLocation();
    const queryParams = useMemo(() => qs.parse(search), [search]);
  
    const [stateValue, setState] = useState(initialState);
  
    useEffect(() => {
      const serializedValue = serialize ? serialize(stateValue) : stateValue !== null ? String(stateValue) : null;
  
      // To avoid infinite loops caused by history.replace (which triggers the history object to change)
      // Check to see if our tag is going to change and only update the query param if that is true
      if (queryParams[paramName] !== serializedValue) {
        const updatedQueryParams = {
          ...queryParams,
        };
  
        if (serializedValue !== null && typeof serializedValue !== 'undefined') {
          updatedQueryParams[paramName] = serializedValue;
        } else {
          delete updatedQueryParams[paramName];
        }
    
        const newURL = qs.stringifyUrl({
          url: pathname,
          query: updatedQueryParams,
        });
    
        history.replace(newURL);
      }
    }, [stateValue, history, paramName, pathname, queryParams, serialize])
  
    return [stateValue, setState];
  };

export default  useQueryState;