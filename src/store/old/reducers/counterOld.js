import { actionTypes } from "../actions";

export const counterOld = (state = { value: 0 }, action) => {
    switch (action.type) {
        case actionTypes.increment: {
            return { ...state, value: state.value + 1 };
        }

        case actionTypes.decrement: {
            return { ...state, value: state.value - 1 };
        }

        case actionTypes.incrementBy: {
            return { ...state, value: state.value + action.payload };
        }

        default: {
            return state;
        }
    }
}

export const selectCounterOld = (state) => state.counterOld.value;
