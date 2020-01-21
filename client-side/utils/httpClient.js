const escapeCors = url => `https://cors-anywhere.herokuapp.com/${url}`;

const processUrl = url =>  {
    url.searchParams.set('api_token', 'fde56d97d8c215316c1ba9f264e86c59');
    return escapeCors(url.toString())
}

const  _fetch = (url, config = {}) => 
    fetch(processUrl(url), config);

export default {
    auddioUrl: 'https://api.audd.io/',
    get: (url = new URL()) => 
        _fetch(url)
        .then(response => response.json()),
    post: (url  = new URL(), data = {}) => 
        _fetch(url, {
            method: 'POST',
            body: data, 
        })
        .then(response => response.json()),
}