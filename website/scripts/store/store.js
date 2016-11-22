
import { markers, news, tips, deals, applyDefaults } from './actions.js';
import { createStore } from 'redux';
import { reducers } from './reducers';
import { get } from '../services/http.js';

export let store = createStore(reducers);
export let dispatch = store.dispatch;
export let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

dispatch(applyDefaults());
dispatch(markers([]));
dispatch(deals([]));
dispatch(news([]));
dispatch(tips([]));

get(`/markers/get`, json => dispatch(markers(json.markers)));
get(`/deals/get`, json => dispatch(deals(json.deals)));
get(`/news/get`, json => dispatch(news(json.news)));
get(`/tips/get`, json => dispatch(tips(json.tips)));