import React from 'react';

export default function SavedTriviaList({triviaList, handleDelete}) {
    const triviaListItems = triviaList ? triviaList.map((item, i) => <li key={i + "D"}><button onClick={() => handleDelete(i, item)}>Delete</button> {item}</li>) : [];
    return (
        <div>
            <h2>Saved Items</h2>
            <ul>
                {triviaListItems}
            </ul>
        </div>
    );
}