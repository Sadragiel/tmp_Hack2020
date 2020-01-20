const defaultConfig = {
    cache: 'no-cache', 
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow', 
    referrer: 'no-referrer', 
}

export default {
    get: (url = '') => 
        fetch(url).then(res => res.json()),
    post: (url = '', data = {}) => 
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            ...defaultConfig,
        })
        .then(response => response.json()),
    put: (url = '', data = {}) => 
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data), 
            ...defaultConfig,
        })
        .then(response => response.json()),
    delete: (url = '') => 
        fetch(url, {
            method: 'DELETE',
            ...defaultConfig,
        })
}