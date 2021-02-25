const getSearchParams = search => {
    const urlSearchParams = new URLSearchParams(search);
    const entries =  urlSearchParams.entries();
    const params = {}
    for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
        params[key] = value;
    }
    return params;

};

export default getSearchParams;