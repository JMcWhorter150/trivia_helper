import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <ul className="nav">
            <Link to="/">Home</Link>
            <Link to="/today">Today in History</Link>
            {/* <Link to="/sports">Sports</Link>
            <Link to="/media">Media</Link> */}
            <Link to="/saved">Saved</Link>
        </ul>
    );
}