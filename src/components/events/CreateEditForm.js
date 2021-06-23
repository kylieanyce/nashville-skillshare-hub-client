import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EventContext } from "./EventProvider.js"
import { BannerImage } from "../bannerSearch/Banner.js"
import "./CreateForm.css"


export const EventForm = () => {
    const { getEvents, createEvent, updateEvent, getEventById } = useContext(EventContext)

    const history = useHistory()
    const currentUser = parseInt(localStorage.getItem("nssh_token"))
    const { eventId } = useParams();

    const [currentEvent, setEvent] = useState({
        title: "",
        datetime: "",
        cost: "",
        description: "",
        location: "",
        address: "",
        hostname: "",
        hosts: 0
    })

    useEffect(() => {
        getEvents()
            .then(() => {
                if (eventId) {
                    getEventById(eventId).then(event => {
                        setEvent({
                            title: event.title,
                            datetime: event.datetime,
                            cost: event.cost,
                            location: event.location,
                            address: event.address,
                            hostname: event.hostname,
                            description: event.description,
                            hosts: event.host
                        })
                    })
                }
            })
    }, [])

    const changeEventState = (event) => {
        const newEvent = { ...currentEvent }
        newEvent[event.target.name] = event.target.value
        setEvent(newEvent)
    }

    return (
        <>
            <BannerImage />
            <form className="eventForm">
                {eventId ? <h2 className="eventForm__title">Edit Event</h2> : <h2 className="eventForm__title">Add New Event</h2>}
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="eventName">Name of Event: </label>
                        <input type="text" id="title" name="title" required autoFocus className="form-control"
                            value={currentEvent.title}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Date: </label>
                        <input type="datetime-local" id="datetime" name="datetime" required autoFocus className="form-control"
                            value={currentEvent.datetime}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>

                {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" id="time" name="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset> */}

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="cost">Cost: </label>
                        <input type="text" id="cost" name="cost" placeholder="Free or $..." required autoFocus className="form-control"
                            value={currentEvent.cost}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Location: </label>
                        <input type="text" id="location" name="location" placeholder="Name of business" required autoFocus className="form-control"
                            value={currentEvent.location}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="address">Address: </label>
                        <input type="text" id="address" name="address" placeholder="123 Apple Ave" required autoFocus className="form-control"
                            value={currentEvent.address}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="hostname">Hostname: </label>
                        <input type="text" id="hostname" name="hostname" placeholder="Name of organizer" required autoFocus className="form-control"
                            value={currentEvent.hostname}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Event Description: </label>
                        <input type="textarea" id="description" name="description" required autoFocus className="form-control"
                            value={currentEvent.description}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>

                {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select id="gameId" name="gameId" className="form-control"
                        value={currentEvent.gameId}
                        onChange={changeEventState}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option key={game.id} value={game.id}>{game.name}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset> */}
                {
                    eventId
                        ? <div className="saveButtonContainer"><button
                            onClick={evt => {
                                evt.preventDefault()
                                updateEvent({
                                    id: parseInt(eventId),
                                    title: currentEvent.title,
                                    datetime: currentEvent.datetime,
                                    cost: currentEvent.cost,
                                    location: currentEvent.location,
                                    address: currentEvent.address,
                                    hostname: currentEvent.hostname,
                                    description: currentEvent.description,
                                    hosts: currentUser
                                })
                                    .then(() => history.push("/events"))
                            }}

                            className="addButton btn btn-primary">Save Event</button></div>
                        :
                        <div className="saveButtonContainer"><button
                            onClick={evt => {
                                evt.preventDefault()
                                createEvent({
                                    title: currentEvent.title,
                                    datetime: currentEvent.datetime,
                                    cost: currentEvent.cost,
                                    location: currentEvent.location,
                                    address: currentEvent.address,
                                    hostname: currentEvent.hostname,
                                    description: currentEvent.description,
                                    hosts: currentUser
                                })
                                    .then(() => history.push("/events"))
                            }}
                            className="addButton btn btn-primary">Create Event</button></div>
                }
            </form>
            {/* <Footer /> */}

        </>
    )
}