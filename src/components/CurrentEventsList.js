import React from 'react';

export default class RecentSports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: ""
        }
    }

    componentDidMount() {
        const {currentNews, sportsNews, getCurrentNews, getSportsNews} = this.props;
        if(!currentNews.length) {
            getCurrentNews();
        }
        if (!sportsNews.length) {
            getSportsNews();
        }
    }

    render() {
        const {handleSelect} = this.props;
        const {topic} = this.state;
        const newsList = topic ? this.props[topic].map((item, i) => (
            <li key={i + "E"}>
                <button onClick={() => handleSelect(item.title)}>Save</button>
                <a href={item.url} rel='noopener noreferrer' target="_blank"> {item.title}</a>
            </li>
        )) : "";

        const topicHeading = topic === "sportsNews" ? "Sports" : topic === "currentNews" ? "U.S." : ""; // converts sportsNews to Sports and currentNews to U.S.

        return (
            <div id='news'>
                <label htmlFor="newsTopic">Select News:</label>
                <select onChange={event => this._handleToggle(event.target.value)} id="newsTopic">
                    <option value="">--</option>
                    <option value="currentNews">U.S.</option>
                    <option value="sportsNews">Sports</option>
                </select>

                <h2>{topicHeading}</h2>
                <ul>
                    {newsList}
                </ul>
            </div>
        )
    }

    _handleToggle = (text) => {
        this.setState({
            topic: text
        })
    }
    
}