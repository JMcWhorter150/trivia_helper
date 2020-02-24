import axios from 'axios';

export const SAVE_TRIVIA = 'ADD_TRIVIA';
export const DEL_TRIVIA = 'DEL_TRIVIA';
export const RESET_TRIVIA = 'RESET_TRIVIA';
export const SET_TRIVIA_BIRTHS_DEATHS_EVENTS = 'SET_TRIVIA_BIRTHS_DEATHS_EVENTS';
export const SET_TRIVIA_FILM = 'SET_TRIVIA_FILM';
export const SET_TRIVIA_MUSIC = 'SET_TRIVIA_MUSIC';
export const SET_TRIVIA_SPORTS = 'SET_TRIVIA_SPORTS';
export const SET_TRIVIA_CURRENTNEWS = 'SET_TRIVIA_CURRENTNEWS';
export const SET_TRIVIA_SPORTSNEWS = 'SET_TRIVIA_SPORTSNEWS';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';


// save trivia actions
export function actionSaveTrivia(trivia) {
    return {
        type: SAVE_TRIVIA,
        payload: trivia
    }
}

export function actionDelTrivia(id, text) {
    return {
        type: DEL_TRIVIA,
        payload: {id, text}
    }
}

export function actionResetTrivia() {
    return {
        type: RESET_TRIVIA
    }
}


// set trivia actions
export function actionSetTriviaBirthsDeathsEvents(obj) {
    return {
        type: SET_TRIVIA_BIRTHS_DEATHS_EVENTS,
        payload: {
            births: obj.births,
            deaths: obj.deaths,
            events: obj.events
        }
    }
}

export function actionSetTriviaFilm(filmTrivia) {
    return {
        type: SET_TRIVIA_FILM,
        payload: filmTrivia
    }
}

export function actionSetTriviaMusic(musicTrivia) {
    return {
        type: SET_TRIVIA_MUSIC,
        payload: musicTrivia
    }
}

export function actionSetTriviaSports(sportsTrivia) {
    return {
        type: SET_TRIVIA_SPORTS,
        payload: sportsTrivia
    }
}

export function actionSetCurrentNews(currentNews) {
    return {
        type: SET_TRIVIA_CURRENTNEWS,
        payload: currentNews
    }
}

export function actionSetSportsNews(sportsNews) {
    return {
        type: SET_TRIVIA_SPORTSNEWS,
        payload: sportsNews
    }
}

export function actionSetQuestionAnswer(arr) {
    return {
        type: SET_QUESTION_ANSWER,
        payload: arr
    }
}


// async actions

export function asyncActionGetTriviaBirthsDeathsEvents() {
    return async (dispatch) => {
            const date = new Date();
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]; // used in the next line to turn getMonth into string
            const todayTitle = monthNames[date.getMonth()] + " " + date.getDate(); // returns "February 19" or "March 1"
            const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&titles=${todayTitle}`;
            const result = await axios.get(url);
            const pageId = Object.keys(result.data.query.pages)[0]; // gets the key value for pageId, which is needed to grab the necessary data
            const listWithLI = result.data.query.pages[pageId].extract.split("<h2>"); // breaks the wiki into parts 
            const todaysData = [[], [], []]; // creating array of arrays to hold string data in next for loop
            for (let i=0; i<todaysData.length; i++) {
                let currentArr = todaysData[i]; // makes code slightly more readable
                currentArr = listWithLI[i + 1].split("</li>").map(item => item.slice(5)); // splits out all the <li> components in section and cleans them up 
                currentArr[0] = currentArr[0].split('<li>')[1]; // cleans up first item that has all text prior to <li> components
                currentArr = currentArr.slice(0, currentArr.length - 2); // gets rid of blank items
                todaysData[i] = currentArr; // makes sure that the array is assigned the correct value (reference vs true types)
            }
            dispatch(actionSetTriviaBirthsDeathsEvents({
                events: todaysData[0],
                births: todaysData[1],
                deaths: todaysData[2]
            }))
    }
}

export function asyncActionGetTriviaFilm() {
    return async (dispatch) => {
        const url = `https://api.apify.com/v2/actor-tasks/NHADsLTRDGnTZJhPu/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        dispatch(actionSetTriviaFilm(result.data[0].linkData));
    }
}

export function asyncActionGetTriviaMusic() {
    return async (dispatch) => {
        const url = `https://api.apify.com/v2/actor-tasks/QjL2MXmqzG6zHXaGr/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        dispatch(actionSetTriviaMusic(result.data[0].musicData));
    }
}

export function asyncActionGetTriviaSports() {
    return async (dispatch) => {
        const url = `https://api.apify.com/v2/actor-tasks/J5K8SwHCw5kWjSdPb/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        dispatch(actionSetTriviaSports(result.data[0].linkData));
    }
}

export function asyncActionGetCurrentNews() {
    return async (dispatch) => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=22d2ce8af8364c3e8c5e6691a95c33ed`;
        const result = await axios.get(url);
        dispatch(actionSetCurrentNews(result.data.articles));
    }
}

export function asyncActionGetSportsNews() {
    return async (dispatch) => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=22d2ce8af8364c3e8c5e6691a95c33ed`;
        const result = await axios.get(url);
        dispatch(actionSetSportsNews(result.data.articles));
    }
}

export function asyncActionGetQuestionAnswer() {
    return async (dispatch) => {
        const url = `https://api.apify.com/v2/actor-tasks/7GCxpRZuB3myEffh6/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        dispatch(actionSetQuestionAnswer([result.data[0].question[0], result.data[0].answer[0]]))
    }
}