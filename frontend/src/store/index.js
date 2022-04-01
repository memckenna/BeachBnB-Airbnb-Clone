import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import spotReducer from './spotReducer';
import bookingReducer from './bookingsReducer';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    spotState: spotReducer,
    bookingState: bookingReducer,
    reviewState: reviewReducer,
    userState: userReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};


export default configureStore;
