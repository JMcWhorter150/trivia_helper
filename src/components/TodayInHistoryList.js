import React from 'react';

export default class TodayInHistoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            optionsList: ['Events', 'Births', 'Deaths', 'Film', 'Music', 'Sports']
        }
    }

    componentDidMount() {
        if(!this.props.events.length) {
            this.props.getTrivia();
        }
    }

    render() {
        // console.log(this.props);
        let {topic} = this.state;
        let {handleSelect} = this.props;
        let topicList = topic && topic !== "--" ? this.props[topic.toLowerCase()].map((item, i) => (
        <li key={i + "A"} >
            <button onSelect={() => handleSelect(item)}>Save</button>
            <p>{item}</p>
        </li>
        )) : "";
        let optionsList = this.state.optionsList.map((text, i) => (
        <li key={i+"C"}>
            <input type="radio" id={text} name="triviaType" value={text} />
            <label onClick={() => this._handleToggle(text)} htmlFor={text}>{text}</label>
        </li>
        ));
        let topicHeader = topic && topic !== "--" ? topic : "";

        return (
            <div id="today">
                <ul className='radioToolbar'>
                    {optionsList}
                </ul>
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