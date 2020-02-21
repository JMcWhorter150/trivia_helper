import {connect} from 'react-redux';
import { actionSaveTrivia, asyncActionGetSportsNews, asyncActionGetCurrentNews } from '../actions';
import CurrentEventsList from '../components/CurrentEventsList';

function mapStateToProps(state) {
    return {
        currentNews: state.currentNews,
        sportsNews: state.sportsNews
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (text) => {dispatch(actionSaveTrivia(text))},
        getCurrentNews: () => dispatch(asyncActionGetCurrentNews()),
        getSportsNews: () => dispatch(asyncActionGetSportsNews())
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(CurrentEventsList);