
import { combineReducers } from 'redux';

function calculator(state = {}, action) {
    if(action.type == 'UPDATE') {
        const section = action.section;
        const value = action.value;
        const name = action.name;

        const newState = Object.assign({}, state);
        newState[section][name] = action.value;
        return newState;
    }

    if(action.type == 'DEFAULTS') {
        const newState = Object.assign({}, state);
        newState.income = {};
        newState.expenses = {};
        return newState;
    }

    return state;
}

function banks(state = {}, action) {
      if(action.type == 'MAP_MARKERS') {
        return Object.assign(state, { markers: action.markers });
    }

    return state;
}

export let reducers = combineReducers({
    calculator,
    banks
});