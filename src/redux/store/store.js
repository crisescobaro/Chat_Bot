// import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { loadState, saveState } from "../storage/localStorage"; // Importa loadState aquí
// import reducer from "../reducer/reducer";

// const rootReducer = combineReducers({
//   helpers: reducer,
// });

// // Carga el estado inicial desde localStorage
// const persistedState = loadState();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   rootReducer,
//   persistedState, // Usa el estado persistido aquí como el estado inicial
//   composeEnhancers(applyMiddleware(thunk))
// );

// store.subscribe(() => {
//   saveState(store.getState());
// });
