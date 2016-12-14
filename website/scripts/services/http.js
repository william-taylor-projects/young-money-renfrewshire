
const baseUrl = '52.209.203.208:3000';

export let post = (url, body, action) => {
    fetch(baseUrl + url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(json => action(json));
}

export let get = (url, action) => {
    fetch(baseUrl + url)
        .then(res => res.json())
        .then(json => action(json));
}