
import { combineReducers } from 'redux';

function calculator(state = {}, action) {
    if(action.type == 'UPDATE') {
        const newState = Object.assign({}, state);

        if(action.section == state.income) {
           newState.income[action.name] = action.value;
        } else {
           newState.expenses[action.name] = action.value;
        }

        return newState;
    }

    if(action.type == 'DEFAULTS' || action.type == 'CLEAR_CALCULATOR') {
        const newState = Object.assign({}, state);
        newState.income = {};
        newState.expenses = {};
        return newState;
    }

    return state;
}

function whatsnew(state = {}, action) {
    if(action.type == 'NEWS') {
        return Object.assign({}, state, { news: action.news })
    }

    return state;
}

function gooddeals(state = {}, action) {
    if(action.type == 'DEALS') {
        return Object.assign({}, state, { deals: action.deals })
    }

    return state;
}


function toptips(state = {}, action) {
    if(action.type == 'TIPS') {
        return Object.assign({}, state, { tips: action.tips })
    }
    
    return state;
}


function map(state = {}, action) {
    if(action.type == 'MARKERS') {
        return Object.assign({}, state, { markers: action.markers });
    }

    return state;
}

export let reducers = combineReducers({
    calculator,
    gooddeals,
    whatsnew,
    toptips,
    map
});