
import { combineReducers } from 'redux';

function messages(state = {}, action) {
    if(action.type == 'TYPE') {
        return Object.assign({}, { MSG: action.msg });
    }
    
    return state;
}

function finance(state = {}, action) {
    return state;
}

function banks(state = {}, action) {
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