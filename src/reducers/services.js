import { FETCH_SERVICES_SUCCESS } from "../types/index";

const INITAL_STATE = { items: [] }

const services = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SERVICES_SUCCESS:
            return { ...state, items: action.services }
        default:
            return state
    }
}

export default services