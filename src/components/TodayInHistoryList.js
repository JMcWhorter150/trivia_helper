import React from 'react';
import axios from 'axios';

export default class TodayInHistoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            events: [],
            births: [],
            deaths: [],
            film: [],
            music: [],
            sports: [], 
            hasLoaded: false,
            topic: ""
        }
    }

    async componentDidMount() {
        if (!this.state.hasLoaded) { // grabs all the data the first time the page loads
            const todaysData = await this._grabEventsBirthsDeaths();
            const newSports = await this._getSportsOnThisDay();
            const newFilm = await this._getFilmEvents();
            const newMusic = await this._getMusicEvents();
            this.setState({
                events: todaysData[0],
                births: todaysData[1],
                deaths: todaysData[2],
                sports: newSports,
                film: newFilm,
                music: newMusic,
                hasLoaded: true
            });
        }

        // switch (this.props.)
    }

    render() {
        // console.log(this.props);
        let {topic} = this.state;
        let {handleSelect} = this.props;
        let topicList = topic && topic !== "--" ? this.state[topic.toLowerCase()].map((item, i) => <li key={i + "A"} onClick={() => handleSelect(item)}>{item}</li>) : "";
        let optionsList = ['--', 'Events', 'Births', 'Deaths', 'Film', 'Music', 'Sports'].map((text, i) => <option value={text} key={i+"C"}>{text}</option>); // update if new trivia topics are added
        let topicHeader = topic && topic !== "--" ? topic : "";

        return (
            <div>
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

    _grabEventsBirthsDeaths = async () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]; // used in the next line to turn getMonth into string
        const todayTitle = monthNames[this.state.date.getMonth()] + " " + this.state.date.getDate(); // returns "February 19" or "March 1"
        const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&titles=${todayTitle}`;
        const result = await axios.get(url);
        const pageId = Object.keys(result.data.query.pages)[0]; // gets the key value for pageId, which is needed to grab the necessary data
        const listWithLI = result.data.query.pages[pageId].extract.split("<h2>"); // breaks the wiki into parts 
        const todaysData = [[], [], []]; // creating array of arrays to hold string data in next for loop
        for (let i=0; i<todaysData.length; i++) {
            let currentArr = todaysData[i]; // makes code slightly more readable
            currentArr = listWithLI[i + 1].split("</li>").map(item => item.slice(5)); // splits out all the <li> components in section and cleans them up 
            currentArr[0] = currentArr[0].split('<li>')[1]; // cleans up first item that has all text prior to <li> components
            currentArr = currentArr.slice(0, currentArr.length - 2); // gets rid of blank items
            todaysData[i] = currentArr; // makes sure that the array is assigned the correct value (reference vs true types)
        }
        return todaysData;
    }

    _getSportsOnThisDay = async () => {
        const url = `https://api.apify.com/v2/actor-tasks/J5K8SwHCw5kWjSdPb/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        return result.data[0].linkData;
    }

    _getFilmEvents = async () => {
        const url = `https://api.apify.com/v2/actor-tasks/NHADsLTRDGnTZJhPu/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        return result.data[0].linkData
    }

    _getMusicEvents = async () => {
        const url = `https://api.apify.com/v2/actor-tasks/QjL2MXmqzG6zHXaGr/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        return result.data[0].musicData
    }

    _handleToggle = (text) => {
        this.setState({
            topic: text
        })
    }
}