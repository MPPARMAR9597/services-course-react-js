import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchServicesById } from "../actions/index";

const ServiceDetail = props => {

    const { servicesId } = useParams()

    useEffect(() => {
        props.dispatch(fetchServicesById(servicesId))
    }, [])

    const { services } = props

    console.log('WHo :>> ', services);
    return (
        <section className="hero is-fullheight is-default is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-5">
                            <figure className="image is-4by3">
                                <img src={services.image} alt="Description" />
                            </figure>
                        </div>
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-2">"2"</h1>
                            <h2 className="subtitle is-4">"3"</h2>
                            <br />
                            <p className="has-text-centered">
                                <a className="button is-medium is-info is-outlined">"4"</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                <div className="container">
                    <div className="tabs is-centered">
                        <ul>
                            <li>
                                <a>And this is the bottom</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({ services: state.selectedService.items })

export default connect(mapStateToProps)(ServiceDetail)