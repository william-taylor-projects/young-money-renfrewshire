
import { createStore } from 'redux';
import { reducers } from './reducers';
import { msg, markers } from './actions.js';

export let store = createStore(reducers);
export let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(markers());
store.dispatch(msg());