import React from 'react';
import axios from 'axios';

export default class RecentSports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentNews: [],
            sportsTrivia: []
        }
    }

    async componentDidMount() {
        await this._getNewSports();
        await this._getSportsOnThisDay();
    }

    render() {
        const {handleSelect} = this.props;

        const currentNewsList = this.state.currentNews.map((item, i) => (
            <li key={i + "E"}>
                <button onClick={() => handleSelect(item.title)}>Save</button>
                <a href={item.url} target="_blank"> {item.title}</a>
            </li>
        ));

        const currentSports = this.state.sportsTrivia.map((item, i) => (
            <li key={i + "F"}>
                <button onClick={() => handleSelect(item)}>Save</button>
                {item}
            </li>
        ));

        return (
            <div>
                <h2>Current Sports Events</h2>
                <ul>
                    {currentNewsList}
                </ul>
                <h2>Sports On This Day</h2>
                <ul>
                    {currentSports}
                </ul>
            </div>
        )
    }

    _getNewSports = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=22d2ce8af8364c3e8c5e6691a95c33ed`;
        const result = await axios.get(url);
        this.setState({
            currentNews: result.data.articles
        })
    }

    _getSportsOnThisDay = async () => {
        const url = `https://api.apify.com/v2/actor-tasks/J5K8SwHCw5kWjSdPb/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        this.setState({
            sportsTrivia: result.data[0].linkData
        })
    }
}