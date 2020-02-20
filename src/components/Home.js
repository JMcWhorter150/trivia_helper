import React from 'react';

export default function Home() {
    return (
        <div id="home">
            <div className="pictureFrame">
                <img src={process.env.PUBLIC_URL + '/study.png'} alt="logo" />
            </div>
            <h1>Trivia Study Guide</h1>
            <h2>Your guide to acing trivia</h2>

            <p>Question of the day:</p>
            <p>Hidden Answer</p>
        </div>
    );
}