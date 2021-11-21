import { actionTypes } from "../actions";

export interface User {
    name: {
        last: string,
        first: string,
    }
}

interface Action {
    type: string,
    user: User
}

export const userReducer = (state = { userData: null, status: '' }, action: Action) => {
    switch (action.type) {
        case actionTypes.setUser: {
            return { ...state, userData: action.user, status: 'success' }
        }

        case actionTypes.setUserPending: {
            return { ...state, status: 'pending' }
        }

        default: {
            return state;
        }
    }
}

export const selectUser = (state) => state.userReducer.userData;
export const selectUserStatus = (state) => state.userReducer.status;
