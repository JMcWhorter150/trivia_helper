import React from 'react';

export default class TodayInHistoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: ""
        }
    }

    render() {
        // console.log(this.props);
        let {topic} = this.state;
        let {handleSelect} = this.props;
        let topicList = topic && topic !== "--" ? this.props[topic.toLowerCase()].map((item, i) => <li key={i + "A"} ><button onClick={() => handleSelect(item)}>Save</button><p>{item}</p></li>) : "";
        let optionsList = ['--', 'Events', 'Births', 'Deaths', 'Film', 'Music', 'Sports'].map((text, i) => <option value={text} key={i+"C"}>{text}</option>); // update if new trivia topics are added
        let topicHeader = topic && topic !== "--" ? topic : "";

        return (
            <div id="today">
                <label htmlFor="triviaTopic">Select a trivia topic:</label>
                <select onChange={event => this._handleToggle(event.target.value)} id="triviaTopic">
                    {optionsList}
                </select>
                <h2>{topicHeader}</h2>
                <ul>
                    {topicList}
                </ul>
            </div>
        );
    }

    _handleToggle = (text) => {
        this.setState({
            topic: text
        })
    }
}