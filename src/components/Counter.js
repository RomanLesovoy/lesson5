import React from 'react';
import { decrement, increment, selectCounter } from '../store/reducers/counter'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;
