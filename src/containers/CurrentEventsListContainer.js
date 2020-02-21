import {connect} from 'react-redux';
import { actionAddTrivia, asyncActionGetSportsNews } from '../actions';
import CurrentEventsList from '../components/CurrentEventsList';

function mapStateToProps(state) {
    return {
        currentNews: state.currentNews,
        sportsNews: state.sportsNews
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (text) => {dispatch(actionAddTrivia(text))},
        getCurrentNews: () => dispatch(asyncActionGetCurrentNews()),
        getSportsNews: () => dispatch(asyncActionGetSportsNews())
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(CurrentEventsList);