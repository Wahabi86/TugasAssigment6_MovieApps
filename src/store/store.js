import { createStore } from "redux";
import moviesReducer from "./reducers";

// Membuat store Redux
const store = createStore(moviesReducer);

export default store;
