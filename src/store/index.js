
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter';
import { counterOld } from "./reducers/counterOld";
import universitiesReducer from "./reducers/universities";
import { fetchUniversities } from "./middleware/universities";
import { userReducer } from "./reducers/user";

export default configureStore({
  reducer: {
    counterReducer,
    counterOld,
    userReducer,
    universitiesReducer,
    // ... next reducers
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {}
  })
});
