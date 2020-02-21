import axios from 'axios';

export const SAVE_TRIVIA = 'ADD_TRIVIA';
export const DEL_TRIVIA = 'DEL_TRIVIA';
export const RESET_TRIVIA = 'RESET_TRIVIA';
export const GET_TRIVIA_BIRTHS_DEATHS_EVENTS = 'GET_TRIVIA_BIRTHS_DEATHS_EVENTS';
export const GET_TRIVIA_FILM = 'GET_TRIVIA_FILM';
export const GET_TRIVIA_MUSIC = 'GET_TRIVIA_MUSIC';
export const GET_TRIVIA_SPORTS = 'GET_TRIVIA_SPORTS';
export const GET_TRIVIA_CURRENTNEWS = 'GET_TRIVIA_CURRENTNEWS';
export const GET_TRIVIA_SPORTSNEWS = 'GET_TRIVIA_SPORTSNEWS';

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

export function actionGetTriviaBirthsDeathsEvents(obj) {
    return {
        type: GET_TRIVIA_BIRTHS_DEATHS_EVENTS,
        payload: {
            births: obj.births,
            deaths: obj.deaths,
            events: obj.events
        }
    }
}

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
            dispatch(actionGetTriviaBirthsDeathsEvents({
                events: todaysData[0],
                births: todaysData[1],
                deaths: todaysData[2]
            }))
    }
}


