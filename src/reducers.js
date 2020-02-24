import {SAVE_TRIVIA, DEL_TRIVIA, RESET_TRIVIA, SET_TRIVIA_BIRTHS_DEATHS_EVENTS, SET_TRIVIA_FILM, SET_TRIVIA_MUSIC, SET_TRIVIA_SPORTSNEWS, SET_TRIVIA_SPORTS, SET_TRIVIA_CURRENTNEWS, SET_QUESTION_ANSWER } from './actions';
const defaultState = {
    saved: Object.keys(window.localStorage).map(item => window.localStorage.getItem(item)).sort(),
    events: [],
    births: [],
    deaths: [],
    film: [],
    music: [],
    sports: [],
    currentNews: [],
    sportsNews: [],
    randomQuestion: "",
    randomAnswer: ""
};

export default function triviaReducer(state=defaultState, action) {
    let newState = {...state};

    switch(action.type) {
        case SAVE_TRIVIA:
            newState.saved.push(action.payload);
            window.localStorage.setItem(action.payload, action.payload);
            break;
        case DEL_TRIVIA:
            const saved = [...newState.saved];
            saved.splice(action.payload.id, 1);
            newState.saved = saved;
            window.localStorage.removeItem(action.payload.text);
            break;
        case RESET_TRIVIA:
            newState.saved = [];
            window.localStorage.clear();
            break;
        case SET_TRIVIA_BIRTHS_DEATHS_EVENTS:
            newState.events = action.payload.events;
            newState.births = action.payload.births;
            newState.deaths = action.payload.deaths;
            break;
        case SET_TRIVIA_FILM:
            newState.film = action.payload;
            break;
        case SET_TRIVIA_MUSIC:
            newState.music = action.payload;
            break;
        case SET_TRIVIA_SPORTS:
            newState.sports = action.payload;
            break;
        case SET_TRIVIA_SPORTSNEWS:
            newState.sportsNews = action.payload;
            break;
        case SET_TRIVIA_CURRENTNEWS:
            newState.currentNews = action.payload;
            break;
        case SET_QUESTION_ANSWER:
            newState.randomQuestion = action.payload[0];
            newState.randomAnswer = action.payload[1];
            break;
        default:
            break;
    }

    return newState;
}