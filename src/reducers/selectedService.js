import { FETCH_SERVICE_SUCCESS } from "../types/index";

const INITAL_STATE = { items: {} }

const selectedService = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SERVICE_SUCCESS:
            return { items: action.services }
        default:
            return state
    }
}

export default selectedService