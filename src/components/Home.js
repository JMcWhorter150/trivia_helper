import React from 'react';

export default function Home() {
    return (
        <div id="home">
            <div className="pictureFrame">
                <img src={process.env.PUBLIC_URL + '/study.png'} alt="logo" />
            </div>
            <h1>This is the home page!</h1>
        </div>
    );
}