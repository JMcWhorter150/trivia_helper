import {connect} from 'react-redux';
import { actionAddTrivia } from '../actions';
import CurrentEventsList from '../components/CurrentEventsList';

function mapStateToProps(state) {
    return {
        currentNews: state.currentNews,
        sportsNews: state.sportsNews
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (text) => {dispatch(actionAddTrivia(text))}
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(CurrentEventsList);