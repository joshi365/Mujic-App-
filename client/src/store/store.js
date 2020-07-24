// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/index";

// function saveToLocalStorage(state) {
//   try {
//     const nutralState = JSON.stringify(state);
//     localStorage.setItem("state", nutralState);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const nutralState = localStorage.getItem("state");
//     if (nutralState === null) return undefined;
//   } catch (error) {
//     console.log(error);
//     return undefined;
//   }
// }

// // const intialState = {};

// const middleware = [thunk];

// const persistingState = loadFromLocalStorage();

// const store = createStore(
//   rootReducer,
//   persistingState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// store.subscribe(() => saveToLocalStorage(store.getState()));

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { persistStore } from "redux-persist";

// const intialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);

export default store;
