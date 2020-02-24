import {connect} from 'react-redux';
import { asyncActionGetQuestionAnswer } from '../actions';
import Home from '../components/Home';

function mapStateToProps(state) {
    return {
        question: state.randomQuestion,
        answer: state.randomAnswer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestionAnswer: () => dispatch(asyncActionGetQuestionAnswer())
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Home);