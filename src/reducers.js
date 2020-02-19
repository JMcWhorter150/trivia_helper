import {ADD_TRIVIA, DEL_TRIVIA} from './actions';
const defaultState = Object.keys(window.localStorage).map(item => window.localStorage.getItem(item));

export default function triviaReducer(state=defaultState, action) {
    const newState = [...state];

    switch(action.type) {
        case ADD_TRIVIA:
            newState.push(action.payload);
            window.localStorage.setItem(state.length, action.payload);
            break;
        case DEL_TRIVIA:
            newState.splice(action.payload, 1);
            window.localStorage.removeItem(action.payload);
            break;
        default:
            break;
    }

    return newState;
}