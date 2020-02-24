import React, { useState, useEffect } from 'react';

export default function Home({question, answer, getQuestionAnswer}) {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        getQuestionAnswer();
    });

    return (
        <div id="home">
            <div id="overlay">
                <h1>Trivia Study Guide</h1>
                <h2>Your guide to acing trivia</h2>

                <p>{question}</p>
                {hidden ? <p>{answer}</p> : <p onClick={() => setHidden(true)}>Click Here To See Answer</p>}
            </div>
        </div>
    );
}