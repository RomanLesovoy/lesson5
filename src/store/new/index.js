import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter';
import universitiesReducer from "./reducers/universities";

export default configureStore({
  reducer: {
    counterReducer,
    universitiesReducer,
    // ... next reducers
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {}
  })
});
