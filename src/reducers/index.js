import { combineReducers } from "redux";
import services from "../reducers/services";
import selectedService from "../reducers/selectedService";

const servicesApp = combineReducers({
    services,
    selectedService
})

export default servicesApp