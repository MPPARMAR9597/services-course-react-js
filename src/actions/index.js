import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS } from "../types/index";

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

export const fetchServicesById = servicesId => {
    console.log('Get Click Services ID FROM DB :>> ', servicesId);
    return db
        .collection('services')
        .doc('servicesId')
        .get()
        .then(snapshot => {
            return {
                type: FETCH_SERVICE_SUCCESS,
                services: { id: snapshot.id, ...snapshot.data() }
            }
        })
}