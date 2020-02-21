import React from 'react';

export default class RecentSports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            optionsList: ['currentNews', 'sportsNews']
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

        let optionsList = this.state.optionsList.map((text, i) => {
            let displayText = text === "sportsNews" ? "Sports" : text === "currentNews" ? "U.S." : "";
            return (
                <li key={i+"C"}>
                    <input type="radio" id={text} name="triviaType" value={text} />
                    <label onClick={() => this._handleToggle(text)} htmlFor={text}>{displayText}</label>
                </li>
            )});

        const topicHeading = topic === "sportsNews" ? "Sports" : topic === "currentNews" ? "U.S." : ""; // converts sportsNews to Sports and currentNews to U.S.

        return (
            <div id="news">
                <ul className="radioToolbar">
                    {optionsList}
                </ul>

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