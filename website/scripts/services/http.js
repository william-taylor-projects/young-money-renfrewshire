
//const baseUrl = 'http://localhost:3000';
const baseUrl = 'http://52.209.203.208:3000';

export let post = (url, body, action) => {
    fetch(baseUrl + url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(json => action(json));
}

export let get = (url, action) => {
    fetch(baseUrl + url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(json => action(json));
}