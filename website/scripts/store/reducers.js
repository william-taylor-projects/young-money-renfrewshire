
import { combineReducers } from 'redux';

function messages(state = {}, action) {
    if(action.type == 'TYPE') {
        return Object.assign(state, { MSG: action.msg });
    }
    
    return state;
}

function finance(state = {}, action) {
    return state;
}

function banks(state = {}, action) {
      if(action.type == 'MAP_MARKERS') {
        return Object.assign(state, { markers: action.markers });
    }

    return state;
}

function deals(state = {}, action) {
    return state;
}

function tips(state = {}, action) {
    return state;
}

export let reducers = combineReducers({
    messages,
    finance,
    banks,
    deals,
    tips
});