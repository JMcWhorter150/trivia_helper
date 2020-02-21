import {SAVE_TRIVIA, DEL_TRIVIA, RESET_TRIVIA} from './actions';
const defaultState = {
    saved: Object.keys(window.localStorage).map(item => window.localStorage.getItem(item)).sort(),
    events: [],
    births: [],
    deaths: [],
    film: [],
    music: [],
    sports: [],
    currentNews: [],
    sportsNews: []
};

export default function triviaReducer(state=defaultState, action) {
    let newState = [...state];

    switch(action.type) {
        case SAVE_TRIVIA:
            newState.saved.push(action.payload);
            window.localStorage.setItem(action.payload, action.payload);
            break;
        case DEL_TRIVIA:
            newState.saved.splice(action.payload.id, 1);
            window.localStorage.removeItem(action.payload.text);
            break;
        case RESET_TRIVIA:
            newState.saved = [];
            window.localStorage.clear();
            break;
        case GET_TRIVIA_BIRTHS_DEATHS_EVENTS:
            newState.events = action.payload.events;
            newState.births = action.payload.births;
            newState.deaths = action.payload.deaths;
            break;
        default:
            break;
    }

    return newState;
}