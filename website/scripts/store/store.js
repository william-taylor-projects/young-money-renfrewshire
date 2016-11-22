
import { markers, news, tips, deals, applyDefaults } from './actions.js';
import { createStore } from 'redux';
import { reducers } from './reducers';

export let store = createStore(reducers);
export let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

const httpLink = 'http://localhost:3000'//'http://52.209.203.208';
const { dispatch } = store;

dispatch(applyDefaults());
dispatch(markers([]));
dispatch(deals([]));
dispatch(news([]));
dispatch(tips([]));

fetch(`${httpLink}/markers/get`).then(res => res.json())
    .then(json => {
        dispatch(markers(json.markers))
    })

fetch(`${httpLink}/news/get`).then(res => res.json())
    .then(json => {
        dispatch(news(json.news))
    })

fetch(`${httpLink}/tips/get`).then(res => res.json())
    .then(json => {
        dispatch(tips(json.tips))
    })

fetch(`${httpLink}/deals/get`).then(res => res.json())
    .then(json => {
        dispatch(deals(json.deals))
    });