import { createStore, applyMiddleware, compose } from "redux"
import root from "./reducers"
import thunk from "redux-thunk"

const persistedState = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState')) : {}

const composeA = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(root, persistedState, composeA(applyMiddleware(thunk)))
export default store;