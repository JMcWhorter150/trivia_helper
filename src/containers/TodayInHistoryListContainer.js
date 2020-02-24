import {connect} from 'react-redux';
import { actionSaveTrivia, asyncActionGetTriviaBirthsDeathsEvents, asyncActionGetTriviaFilm, asyncActionGetTriviaMusic, asyncActionGetTriviaSports } from '../actions';
import TodayInHistoryList from '../components/TodayInHistoryList';

function mapStateToProps(state) {
    return {
        events: state.events,
        births: state.births,
        deaths: state.deaths,
        film: state.film,
        music: state.music,
        sports: state.sports,
        saved: state.saved
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (text) => dispatch(actionSaveTrivia(text)),
        getTrivia: () => {
            dispatch(asyncActionGetTriviaBirthsDeathsEvents());
            dispatch(asyncActionGetTriviaFilm());
            dispatch(asyncActionGetTriviaMusic());
            dispatch(asyncActionGetTriviaSports());
        }

    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(TodayInHistoryList);