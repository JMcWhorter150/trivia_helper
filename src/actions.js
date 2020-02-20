export const ADD_TRIVIA = 'ADD_TRIVIA';
export const DEL_TRIVIA = 'DEL_TRIVIA';
export const RESET_TRIVIA = 'RESET_TRIVIA';

export function actionAddTrivia(trivia) {
    return {
        type: ADD_TRIVIA,
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