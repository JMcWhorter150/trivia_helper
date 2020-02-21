import React from 'react';
import axios from 'axios';

export default class RecentSports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentNews: [],
            sportsNews: [],
            topic: "",
            hasLoaded: false
        }
    }

    async componentDidMount() {
        if (!this.state.hasLoaded) {
            console.log('sending news fetch requests');
            const newSports = await this._getSportsNews();
            const newNews = await this._getCurrentNews();
            this.setState({
                sportsNews: newSports,
                currentNews: newNews,
                hasLoaded: true
            })
        }
    }

    render() {
        const {handleSelect} = this.props;
        const {topic} = this.state;

        const newsList = topic ? this.state[topic].map((item, i) => (
            <li key={i + "E"}>
                <button onClick={() => handleSelect(item.title)}>Save</button>
                <a href={item.url} rel='noopener noreferrer'> {item.title}</a>
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

    _getSportsNews = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=22d2ce8af8364c3e8c5e6691a95c33ed`;
        const result = await axios.get(url);
        return result.data.articles;
    }

    _getCurrentNews = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=22d2ce8af8364c3e8c5e6691a95c33ed`;
        const result = await axios.get(url);
        return result.data.articles;
    }

    _handleToggle = (text) => {
        this.setState({
            topic: text
        })
    }
    
}