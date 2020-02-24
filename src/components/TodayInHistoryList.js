import React from 'react';

export default class TodayInHistoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            optionsList: ['Events', 'Births', 'Deaths', 'Film', 'Music', 'Sports'],
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
        if(!this.props.events.length) {
            this.props.getTrivia();
        }
    }

    render() {
        let {topic} = this.state;
        let {handleSelect, saved} = this.props;
        let topicList = topic && topic !== "--" ? this.props[topic.toLowerCase()].map((item, i) => {
            let buttonText = saved.includes(item) ? "Saved" : "Save";
            return (
                <li className="trivia" key={i + "A"} >
                    <button className={buttonText} onClick={() => {handleSelect(item); this._updateSaved(item)}}>{buttonText}</button>
                    <p>{item}</p>
                </li>
        )}) : "";
        let optionsList = this.state.optionsList.map((text, i) => (
        <li key={i+"C"}>
            <input type="radio" id={text} name="triviaType" value={text} />
            <label onClick={() => this._handleToggle(text)} htmlFor={text}>{text}</label>
        </li>
        ));

        return (
            <div id="today">
                <ul className='radioToolbar'>
                    {optionsList}
                </ul>

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

    _updateSaved = (text) => {
        this.setState({
            saved: [...this.state.saved, text]
        })
    }
}