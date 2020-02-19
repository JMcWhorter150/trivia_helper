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
    }

    render() {
        const {handleSelect} = this.props;
        const currentNewsList = this.state.currentNews.map((item, i) => (
            <li key={i + "E"}>
                <button onClick={() => handleSelect(item.title)}>Save</button>
                <a href={item.url} target="_blank"> {item.title}</a>
            </li>
        ))

        return (
            <ul>
                {currentNewsList}
            </ul>
        )
    }

    _getNewSports = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=22d2ce8af8364c3e8c5e6691a95c33ed`;
        const result = await axios.get(url);
        this.setState({
            currentNews: result.data.articles
        })
    }
}