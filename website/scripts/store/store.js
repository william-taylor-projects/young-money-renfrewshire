
import { createStore } from 'redux';
import { reducers } from './reducers';
import { msg } from './actions.js';

export let store = createStore(reducers);
export let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(msg());