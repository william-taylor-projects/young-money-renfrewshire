
import { combineReducers } from 'redux';

const calculator = (state = {}, action) => {
    if(action.type == 'UPDATE') {
        const newState = Object.assign({}, state);

        if(action.section == state.income) {
           newState.income[action.name] = { value: action.value, weekly: action.weekly };
        } else {
           newState.expenses[action.name] = { value: action.value, weekly: action.weekly };
        }

        return newState;
    }

    if(action.type == 'DEFAULTS' || action.type == 'CLEAR_CALCULATOR') {
        const newState = Object.assign({}, state);
        newState.expenses = {};
        newState.income = {};
        newState.advanced = action.type == 'DEFAULTS' ? true : newState.advanced;
        return newState;
    }

    return state;
}

const whatsnew = (state = {}, action) => {
    if(action.type == 'NEWS') {
        return Object.assign({}, state, { news: action.news })
    }

    return state;
}

const gooddeals = (state = {}, action) => {
    if(action.type == 'DEALS') {
        return Object.assign({}, state, { deals: action.deals })
    }

    return state;
}


const toptips = (state = {}, action) => {
    if(action.type == 'TIPS') {
        return Object.assign({}, state, { tips: action.tips })
    }
    
    return state;
}


const map = (state = {}, action) => {
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