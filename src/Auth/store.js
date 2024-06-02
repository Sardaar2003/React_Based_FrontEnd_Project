import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './Reducer/RootReducer';
import { sessionService } from 'redux-react-session';

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware().concat(thunk);
    console.log('Middleware:', middleware); // Debug line
    return middleware;
  },
  preloadedState: initialState,
});

sessionService.initSessionService(store);

export default store;
