
import { markers, applyDefaults } from './actions.js';
import { createStore } from 'redux';
import { reducers } from './reducers';

export let store = createStore(reducers);
export let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(applyDefaults());
store.dispatch(markers());