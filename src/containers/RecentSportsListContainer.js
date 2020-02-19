import {connect} from 'react-redux';
import { actionAddTrivia } from '../actions';
import RecentSports from '../components/RecentSportsList';

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (text) => {dispatch(actionAddTrivia(text))}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(RecentSports);