import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, selectCounter } from '../store/reducers/counter'

class CounterClass extends React.Component {
    render() {
        const { incrementCounter, counter } = this.props;
        return (
            <div>
                <button
                  aria-label="Increment value"
                  onClick={() => incrementCounter()}
                >
                  Increment
                </button>
                <span>{ counter }</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: selectCounter(state), // state.counterReducer.value
    // ...
});

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
