import { FETCH_SERVICES_SUCCESS } from "../types/index";

import db from "../DB/index";

export const fetchServices = () => {

    return db
        .collection('services')
        .get()
        .then(snapshot => {
            const services = snapshot.docs.map(docs => ({ id: docs.id, ...docs.data() }))
            return {
                type: FETCH_SERVICES_SUCCESS,
                services
            }
        })
}