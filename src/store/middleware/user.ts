import {setUser, setUserPending} from "../actions";
import { User } from '../reducers/user'

export function fetchUser(id: string) {
    // The `extraArgument` is the third arg for thunk functions
    return async (dispatch: (param1: object) => {}, getState) => {
        // ...
        dispatch(setUserPending());
        const response = await fetch('https://randomuser.me/api/');
        const result = await response.json();
        const user: User = result.results[0];

        setTimeout(() => {
            dispatch(setUser(user));
        }, 3000)

        // you can use api here
    }
}
