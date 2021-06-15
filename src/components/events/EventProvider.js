import React, { useState } from "react"

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])
    const [searchTerms, setSearchTerms] = useState("")


    const getEvents = () => {
        return fetch("http://localhost:8000/events", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const getEventById = (id) => {
        return fetch(`http://localhost:8000/events/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
    }

    const getMyEvents = (id) => {
        return fetch(`http://localhost:8000/events/myevents`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const createEvent = (event) => {
        return fetch("http://localhost:8000/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            },
            body: JSON.stringify(event)
        })
            .then(response => response.json())
            .then(getEvents)
    }

    const updateEvent = (event) => {
        return fetch(`http://localhost:8000/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }

    const deleteEvent = (id) => {
        return fetch(`http://localhost:8000/events/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            },
        })
            .then(getEvents)
    }

    const unbookmarkEvent = eventId => {
        return fetch(`http://localhost:8000/events/${eventId}/signup`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(getEvents)
    }


    const bookmarkEvent = eventId => {
        return fetch(`http://localhost:8000/events/${eventId}/signup`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(getEvents)
    }

    return (
        <EventContext.Provider value={{
            events, getEvents, createEvent, bookmarkEvent,
            unbookmarkEvent, getEventById, updateEvent, deleteEvent,
            searchTerms, setSearchTerms, setEvents, getMyEvents
        }} >
            {props.children}
        </EventContext.Provider>
    )
}