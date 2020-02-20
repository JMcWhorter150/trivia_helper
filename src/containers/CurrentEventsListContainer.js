import {connect} from 'react-redux';
import { actionAddTrivia } from '../actions';
import CurrentEventsList from '../components/CurrentEventsList';

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (text) => {dispatch(actionAddTrivia(text))}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(CurrentEventsList);