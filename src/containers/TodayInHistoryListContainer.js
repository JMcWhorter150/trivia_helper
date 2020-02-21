import {connect} from 'react-redux';
import { actionAddTrivia } from '../actions';
import TodayInHistoryList from '../components/TodayInHistoryList';

function mapStateToProps(state) {
    return {
        events: state.events,
        births: state.births,
        deaths: state.deaths,
        film: state.film,
        music: state.music,
        sports: state.sports
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (text) => dispatch(actionAddTrivia(text))
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(TodayInHistoryList);