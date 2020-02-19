import {connect} from 'react-redux';
import { actionDelTrivia } from '../actions';
import SavedTriviaList from '../components/SavedTriviaList';

function mapStateToProps(state) {
    return {
        triviaList: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleDelete: (id) => dispatch(actionDelTrivia(id))
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(SavedTriviaList);