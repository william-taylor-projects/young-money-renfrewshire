
export let post = (url, body, action) => {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(json => action(json));
}

export let get = (url, action) => {
    fetch(url)
        .then(res => res.json())
        .then(json => action(json));
}