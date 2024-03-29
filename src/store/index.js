import {createStore} from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

// const middleware = [thunk];

const index = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // compose(
    //     applyMiddleware(...middleware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);

export default index;