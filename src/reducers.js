export const ADD_TRIVIA = 'ADD_TRIVIA';
export const DEL_TRIVIA = 'DEL_TRIVIA';

export function actionAddTrivia(trivia) {
    return {
        type: ADD_TRIVIA,
        payload: trivia
    }
}

export function actionDelTrivia(id) {
    return {
        type: DEL_TRIVIA,
        payload: id
    }
}