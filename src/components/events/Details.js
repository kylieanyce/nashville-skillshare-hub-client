import React, { useContext, useEffect, useState, useRef } from "react"
import { useParams, useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider";
import moment from "moment"
import "./Details.css"


export const EventDetails = () => {
    const { getEventById, deleteEvent, updateEvent } = useContext(EventContext)
    const { eventId } = useParams();
    const history = useHistory();
    const modal = useRef();

    // set post state variable
    const [currentEvent, setEvent] = useState({
        title: "",
        datetime: "",
        cost: "",
        description: "",
        location: "",
        address: "",
        hostname: "",
        hosts: 0,
        organizers: true
    });

    // grab post by ID from params and set post
    useEffect(() => {
        getEventById(eventId)
            .then((res) => {
                setEvent(res)
            })
    }, [])

    const handleModal = () => {
        const deleteGuardRail = modal.current.showModal()
    }

    const handleDelete = () => {
        deleteEvent(eventId)
        modal.current.close()
        history.push("/events/myevents")
    }

    return (
        <section>
            <h2 className="neon">Event Details</h2>
            <div className="details">
                <div className="detailItem">
                    <div className="bookmark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-star" viewBox="0 0 16 16">
                            <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                        </svg>
                    </div>
                    <h2 style={{ textTransform: 'capitalize' }}>{currentEvent.title}</h2>

                    <p><strong>Date: </strong>{moment(currentEvent.datetime).format("LL")}</p>
                    <p><strong>Time: </strong>{moment(currentEvent.datetime).format("LT")}</p>
                    <p><strong>Cost: </strong>{currentEvent.cost}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Hosted By: </strong>{currentEvent.hostname}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Location: </strong>{currentEvent.location}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Address: </strong>{currentEvent.address}</p>
                    <p><strong>Event Description: </strong>{currentEvent.description}</p>
                    {currentEvent.organizers ?
                        <div>
                            <button onClick={handleModal}> Delete </button>
                            <button onClick={() => history.push(`/events/${currentEvent.id}/edit`)}> Edit </button >
                        </div>
                        : ""}
                    <dialog className="guardRailModal" ref={modal}>
                        <h3>Delete</h3>
                        <p>Are you sure you want to delete this event? </p>
                        <button onClick={handleDelete}>Delete</button>
                        {/* <button onClick={() => {
                            modal.current.close()
                            deleteEvent(currentEvent.id)
                            console.log(currentEvent)
                            history.push("/events/myevents")
                        }}> Yes, Delete! </button> */}
                        <button onClick={() => {
                            modal.current.close()
                            history.push(`/events/detail/${currentEvent.id}`)
                        }}> No, Cancel </button>
                    </dialog>

                </div>
            </div>
        </section>
    )


}