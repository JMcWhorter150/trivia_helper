import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <ul id="nav">
            <div className="pictureFrame">
                <img src={process.env.PUBLIC_URL + '/study.png'} alt="logo" />
            </div>
            <Link to="/">Home</Link>
            <Link to="/today">Today in History</Link>
            <Link to="/news">News</Link>
            <Link to="/saved">Saved</Link>
        </ul>
    );
}