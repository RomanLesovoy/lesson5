import React from 'react';
import { connect } from 'react-redux';
import {selectCounterOld} from "../store/old/reducers/counterOld";
import { decrement, increment, incrementBy } from "../store/old/actions";

class CounterClass extends React.Component {
    render() {
        const { incrementCounter, counter } = this.props;
        return (
            <div>
                <button
                  aria-label="Increment value"
                  onClick={() => incrementBy()}
                >
                  Increment
                </button>
                <span>{ counter }</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: selectCounterOld(state), // state.counterReducer.value
    // ...
});

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
