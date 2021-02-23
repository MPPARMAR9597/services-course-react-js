import { createStore, combineReducers, applyMiddleware } from "redux";
import servicesApp from "../reducers/index";

const logger = store => nextDispatch => action => {
    console.group(action.type)
    console.log('%c Prev State', 'color : Pink', store.getState())
    console.log('%c Action', 'color : red', action)
    const returnVal = nextDispatch(action)
    console.log('%c Next State', 'color : green', store.getState())
    console.groupEnd(action.type)
    return returnVal
}

const promise = store => nextDispatch => action => {
    if (typeof action.then === 'function') {
        return action.then(nextDispatch)
    }
    return nextDispatch(action)
}

const applyMiddlewares = (store, middleWares) => {
    middleWares.slice().reverse().forEach(middleWare => {
        store.dispatch = middleWare(store)(store.dispatch)
    });
}

const initStore = () => {
    const middleWares = [promise]

    var browserSupport = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    const store = createStore(servicesApp, browserSupport)

    if (process.env.NODE_ENV !== 'production') {
        middleWares.push(logger)
    }

    applyMiddlewares(store, middleWares)

    return store
}

export default initStore