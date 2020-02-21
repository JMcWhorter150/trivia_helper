import {connect} from 'react-redux';
import { actionDelTrivia, actionResetTrivia } from '../actions';
import SavedTriviaList from '../components/SavedTriviaList';

function mapStateToProps(state) {
    return {
        triviaList: state.saved
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleDelete: (id, text) => {
            dispatch(actionDelTrivia(id, text));
            console.log(id);
            console.log(text);
        },
        handleReset: () => dispatch(actionResetTrivia())
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(SavedTriviaList);