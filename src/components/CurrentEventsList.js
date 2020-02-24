import React from 'react';

export default class RecentSports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            optionsList: ['currentNews', 'sportsNews'],
            saved: [...this.props.saved]
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.saved !== state.saved) {
            return {
                saved: props.saved
            }
        } else {
            return state;
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
        const {handleSelect, saved} = this.props;
        const {topic} = this.state;
        const newsList = topic ? this.props[topic].map((item, i) => {
            let buttonText = saved.includes(item.title) ? "Saved" : "Save";
            return (
                <li key={i + "E"} className="trivia">
                    <button className={buttonText} onClick={() => {handleSelect(item.title); this._updateSaved(item.title)}}>{buttonText}</button>
                    <a href={item.url} rel='noopener noreferrer' target="_blank"> {item.title}</a>
                </li>
        )}) : "";

        let optionsList = this.state.optionsList.map((text, i) => {
            let displayText = text === "sportsNews" ? "Sports" : text === "currentNews" ? "U.S." : "";
            return (
                <li key={i+"C"}>
                    <input type="radio" id={text} name="triviaType" value={text} />
                    <label onClick={() => this._handleToggle(text)} htmlFor={text}>{displayText}</label>
                </li>
            )});

        return (
            <div id="news">
                <ul className="radioToolbar">
                    {optionsList}
                </ul>

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
    
    _updateSaved = (text) => {
        this.setState({
            saved: [...this.state.saved, text]
        })
    }
}