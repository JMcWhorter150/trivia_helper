import React from 'react';
import axios from 'axios';

export default class RecentMediaList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filmEvents: [],
            musicEvents: []
        }
    }

    async componentDidMount() {
        await this._getFilmEvents();
        await this._getMusicEvents();
    }

    render() {
        const {handleSelect} = this.props;
        const filmEvent = this.state.filmEvents.map((item, i) => (
            <li key={i + "G"}>
                <button onClick={() => handleSelect(item)}>Save</button>
                {item}
            </li>));

        const musicEvent = this.state.musicEvents.map((item, i) => (
            <li key={i + "G"}>
                <button onClick={() => handleSelect(item)}>Save</button>
                {item}
            </li>));

        return (
            <div>
                <h2>Film Events On This Day</h2>
                <ul>
                    {filmEvent}
                </ul>
                <h2>Music Events On This Day</h2>
                <ul>
                    {musicEvent}
                </ul>
            </div>
        )
    }

    _getFilmEvents = async () => {
        const url = `https://api.apify.com/v2/actor-tasks/NHADsLTRDGnTZJhPu/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        this.setState({
            filmEvents: result.data[0].linkData
        })
    }

    _getMusicEvents = async () => {
        const url = `https://api.apify.com/v2/actor-tasks/QjL2MXmqzG6zHXaGr/runs/last/dataset/items?token=fkp2JJtBYnJvTCZWCDLuxDKRh`;
        const result = await axios.get(url);
        this.setState({
            musicEvents: result.data[0].musicData
        })
    }
}