import React from 'react';
import TodayItem from './TodayItem';
import axios from 'axios';

export default class TodayInHistoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            events: [],
            births: [],
            deaths: []
        }
    }

    async componentDidMount() {
        await this._grabHistoryList();
    }

    render() {
        let {events, births, deaths} = this.state;
        return (
            <div>
                <h2>Events</h2>
                <ul>
                    {events.map((item, i) => <li key={i + "A"} onClick={this.handleSelect}>{item}</li>)}
                </ul>
                <h2>Births</h2>
                <ul>
                    {births.map((item, i) => <li key={i + "B"} onClick={this.handleSelect}>{item}</li>)}
                </ul>
                <h2>Deaths</h2>
                <ul>
                    {deaths.map((item, i) => <li key={i + "C"} onClick={this.handleSelect}>{item}</li>)}
                </ul>
            </div>
        );
    }

    _grabHistoryList = async () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]; // used in the next line to turn getMonth into string
        const todayTitle = monthNames[this.state.date.getMonth()] + " " + this.state.date.getDate(); // returns "February 19" or "March 1"
        const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&titles=${todayTitle}`;
        const result = await axios.get(url);
        const pageId = Object.keys(result.data.query.pages)[0];
        const listWithLI = result.data.query.pages[pageId].extract.split("<h2>");
        let newEvents = listWithLI[1].split("</li>").map(item => item.slice(5));
        newEvents[0] = newEvents[0].split('<li>')[1];
        newEvents = newEvents.slice(0, newEvents.length - 2);
        let newBirths = listWithLI[2].split("</li>").map(item => item.slice(5));
        newBirths[0] = newBirths[0].split('<li>')[1];
        newBirths = newBirths.slice(0, newBirths.length - 2);
        let newDeaths = listWithLI[3].split("</li>").map(item => item.slice(5));
        newDeaths[0] = newDeaths[0].split('<li>')[1];
        newDeaths = newDeaths.slice(0, newDeaths.length - 2);
        this.setState({
            events: newEvents,
            births: newBirths,
            deaths: newDeaths
        })
    }

    handleSelect = () => {
        console.log('yep');
    }
}