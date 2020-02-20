import {ADD_TRIVIA, DEL_TRIVIA, RESET_TRIVIA} from './actions';
const defaultState = Object.keys(window.localStorage).map(item => window.localStorage.getItem(item)).sort();

export default function triviaReducer(state=defaultState, action) {
    let newState = [...state];

    switch(action.type) {
        case ADD_TRIVIA:
            newState.push(action.payload);
            window.localStorage.setItem(action.payload, action.payload);
            break;
        case DEL_TRIVIA:
            newState.splice(action.payload.id, 1);
            window.localStorage.removeItem(action.payload.text);
            break;
        case RESET_TRIVIA:
            newState = [];
            window.localStorage.clear();
            break;
        default:
            break;
    }

    return newState;
}