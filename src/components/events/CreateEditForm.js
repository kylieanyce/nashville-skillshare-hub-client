import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider.js"
import { GameContext } from "./GameProvider.js"


export const EventForm = () => {
    const { getEvents, createEvent } = useContext(EventContext)
    const { games, getGames } = useContext(GameContext)

    const history = useHistory()
    const currentUser = parseInt(localStorage.getItem("lu_token"))

    const [currentEvent, setEvent] = useState({
        name: "",
        date: "",
        time: "",
        content: "",
        gameId: 0,
        host: 0
    })

    useEffect(() => {
        getGames()
    }, [])

    useEffect(() => {
        getEvents()
    }, [])

    const changeEventState = (event) => {
        const newEvent = { ...currentEvent }
        newEvent[event.target.id] = event.target.value
        setEvent(newEvent)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Name of Event: </label>
                    <input type="text" id="name" required autoFocus className="form-control"
                        value={currentEvent.name}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Event Description: </label>
                    <input type="text" id="content" required autoFocus className="form-control"
                        value={currentEvent.content}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select id="gameId" className="form-control"
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
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" id="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createEvent({
                        name: currentEvent.name,
                        date: currentEvent.date,
                        time: currentEvent.time,
                        content: currentEvent.content,
                        gameId: parseInt(currentEvent.gameId),
                        host: currentUser
                    })
                        .then(() => history.push("/events"))
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}