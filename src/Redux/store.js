import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import todo from "./redusers";

const Store = createStore(
    todo, composeWithDevTools(applyMiddleware())
)

export default Store;