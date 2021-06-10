import React, { useContext, useEffect, useState, useRef } from "react"
import { useParams, useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider";

export const EventDetails = () => {
    const { getEventById, deleteEvent } = useContext(EventContext)
    const currentUserId = parseInt(sessionStorage.getItem("nssh_token"))
    const { eventId } = useParams();
    const history = useHistory();
    const modal = useRef();

    // set post state variable
    const [currentEvent, setEvent] = useState({
        title: "",
        date: "",
        time: "",
        cost: "",
        description: "",
        location: "",
        address: "",
        hostname: "",
        hosts: 0
    });

    // grab post by ID from params and set post
    useEffect(() => {
        getEventById(eventId)
            .then((res) => {
                setEvent(res)
            })
    }, [])

    // renders details of plant
    return (
        <section>
            <h2 className="neon">Event Details</h2>
            <div className="details">
                <div className="detailItem">
                    <h2 style={{ textTransform: 'capitalize' }}>{currentEvent.title}</h2>

                    <p><strong>Date: </strong>{currentEvent.date}</p>
                    <p><strong>Time: </strong>{currentEvent.time}</p>
                    <p><strong>Cost: </strong>{currentEvent.cost}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Hosted By: </strong>{currentEvent.hostname}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Location: </strong>{currentEvent.location}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Address: </strong>{currentEvent.address}</p>
                    <p><strong>Event Description: </strong>{currentEvent.description}</p>

                </div>
            </div>
        </section>
    )


}