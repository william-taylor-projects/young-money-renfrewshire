
// For server development
const baseUrl = 'http://localhost:3000';
//const baseUrl = 'http://www.youngmoneyren.org'
const retry = 2500;

export let post = (url, body, action) => {
    fetch(baseUrl + url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        timeout: 0
    })
    .then(res => res.json())
    .then(json => action(json))
    .catch(err => setTimeout(() => post(url, body, action), retry));
}

export let get = (url, action) => {
    fetch(baseUrl + url, {
        method: 'GET',
        mode: 'cors',
        timeout: 0
    })
    .then(res => res.json())
    .then(json => action(json))
    .catch(err => setTimeout(() => get(url, action), retry));
}