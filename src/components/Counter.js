import React from 'react';
import { increment, decrement, incrementBy } from "../store/old/actions";
import { selectCounterOld } from "../store/old/reducers/counterOld";
import { useDispatch, useSelector } from 'react-redux'
// import { fetchUniversities } from "../store/new/middleware/universities";
import { fetchUser } from "../store/old/middleware/user";

function Counter() {
  const count = useSelector(selectCounterOld);
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
        <button
            aria-label="Increment value by"
            onClick={() => dispatch(incrementBy(5))}
        >
          Increment by
        </button>
        {/*<button onClick={() => dispatch(fetchUniversities())}>Fetch Universities</button>*/}
        <button onClick={() => dispatch(fetchUser('id'))}>Fetch User</button>
      </div>
    </div>
  )
}

export default Counter;
