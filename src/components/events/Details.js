import React, { useContext, useEffect, useState, useRef } from "react"
import { useParams, useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider";
import moment from "moment"
import { BannerImage } from "../bannerSearch/Banner.js";
import Modal from 'react-modal';
import "./Details.css"


export const EventDetails = () => {
    const { getEventById, deleteEvent, bookmarkEvent, unbookmarkEvent } = useContext(EventContext)
    const { eventId } = useParams();
    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false)

    // set post state variable
    const [currentEvent, setEvent] = useState({
        title: "",
        datetime: "",
        cost: "",
        description: "",
        location: "",
        address: "",
        hostname: "",
        hosts: 0
    });

    // grab event by ID from params and set event
    useEffect(() => {
        getEventById(eventId)
            .then((res) => {
                setEvent(res)
            })
    }, [])


    // deletes event and closes modal
    const handleDelete = () => {
        deleteEvent(eventId)
        setModalOpen(false)
        history.push("/events/myevents")
    }

    // bookmarks event with event id 
    // then gets events by id which changes bookmark icon to appear bookmarked
    const handleBookmark = () => {
        bookmarkEvent(eventId)
            .then(() => getEventById(eventId)
                .then((res) => {
                    setEvent(res)
                }))
    }

    const handleModalClose = () => {
        setModalOpen(false);
    };
    // unbookmarks event
    // gets events by id which changes bookmark icon to appear unbookmarked
    const handleUnbookmark = () => {
        unbookmarkEvent(eventId)
            .then(() => getEventById(eventId)
                .then((res) => {
                    setEvent(res)
                }))
    }

    return (
        <section>
            <BannerImage />
            <h2 className="neon">Event Details</h2>
            <div className="details">
                <div className="detailItem">
                    {currentEvent.bookmarked ?
                        <div className="bookmark" onClick={handleUnbookmark} >
                            <svg pointerEvents="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bookmarkItem bi bi-bookmark-x-fill" viewBox="0 0 16 16">
                                <path pointerEvents="auto" fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z" />
                            </svg>
                            <h2 className="bookmarkItem" style={{ textTransform: 'capitalize' }}>{currentEvent.title}</h2>
                        </div>
                        :
                        <div className="bookmark" onClick={handleBookmark} >
                            <svg pointerEvents="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bookmarkItem bi bi-bookmark-star" viewBox="0 0 16 16">
                                <path pointerEvents="auto" d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                            </svg>
                            <h2 className="bookmarkItem" style={{ textTransform: 'capitalize' }}>{currentEvent.title}</h2>
                        </div>
                    }

                    <p><strong>Date: </strong>{moment(currentEvent.datetime).format("LL")}</p>
                    <p><strong>Time: </strong>{moment(currentEvent.datetime).format("LT")}</p>
                    <p><strong>Cost: </strong>$ {currentEvent.cost}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Hosted By: </strong>{currentEvent.hostname}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Location: </strong>{currentEvent.location}</p>
                    <p style={{ textTransform: 'capitalize' }}><strong>Address: </strong>{currentEvent.address}</p>
                    <p><strong>Event Description: </strong>{currentEvent.description}</p>

                    {currentEvent.organizers ?
                        <div className="deleteButtonContainer">
                            <button className="deleteButton" onClick={() => setModalOpen(true)}> Delete </button>
                            <button className="editButton" onClick={() => history.push(`/events/${currentEvent.id}/edit`)}> Edit </button >
                        </div>
                        : ""}
                    <Modal className="modal"
                        isOpen={modalOpen}
                        onRequestClose={() => setModalOpen(false)}
                        onClose={handleModalClose}>
                        <h3>Delete</h3>
                        <p>Are you sure you want to delete this event? </p>
                        <div className="deleteButtonContainer"><button className="deleteButton" onClick={handleDelete}>Delete</button>

                            <button className="cancelButton" onClick={() => {
                                setModalOpen(false)
                                history.push(`/events/detail/${currentEvent.id}`)
                            }}> No, Cancel </button>
                        </div>
                    </Modal>

                </div>
            </div>
            {/* <Footer /> */}

        </section >
    )


}