import {ADD_TRIVIA, DEL_TRIVIA} from './actions';
const defaultState = Object.keys(window.localStorage).map(item => window.localStorage.getItem(item));

export default function triviaReducer(state=defaultState, action) {
    const newState = [...state];

    switch(action.type) {
        case ADD_TRIVIA:
            newState.push(action.payload);
            window.localStorage.setItem(action.payload, action.payload);
            break;
        case DEL_TRIVIA:
            newState.splice(action.payload.id, 1);
            window.localStorage.removeItem(action.payload.text);
            break;
        default:
            break;
    }

    return newState;
}