import {connect} from 'react-redux';
import { actionDelTrivia, actionResetTrivia } from '../actions';
import SavedTriviaList from '../components/SavedTriviaList';

function mapStateToProps(state) {
    return {
        triviaList: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleDelete: (id, text) => dispatch(actionDelTrivia(id, text)),
        handleReset: () => dispatch(actionResetTrivia())
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(SavedTriviaList);