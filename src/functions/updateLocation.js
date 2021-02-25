import getSearchParams from './getSearchParams.js';

const updateLocation = (location, param, value) => {
    const { pathname, search } = location;
    const params = getSearchParams(search);
    let queryString;
    if (params[param] != value) {
        params[param] = value;
        queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        queryString = queryString ? `?${queryString}` : "";
    } else {
        queryString = search;
    }
    return pathname + queryString;
}

export default updateLocation;