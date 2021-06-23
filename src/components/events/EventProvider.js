import React, { useState } from "react"

export const EventContext = React.createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])
    const [searchTerms, setSearchTerms] = useState("")


    const getEvents = () => {
        return fetch(`http://localhost:8000/events`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }
    // const getEvents = () => {
    //     return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events`, {
    //         headers: {
    //             "Authorization": `Token ${localStorage.getItem("nssh_token")}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(setEvents)
    // }

    const searchEvents = (searchTerm) => {
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events?q=${searchTerm}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const searchDate = (searchDate) => {
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events?date=${searchDate}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const getEventById = (id) => {
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
    }

    const getMyEvents = () => {
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events/myevents`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const getMyBookmarks = () => {
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events/mybookmarks`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(response => response.json())
            .then(setEvents)
    }

    const createEvent = (event) => {
        return fetch("https://nashville-skillshare-hub-serve.herokuapp.com/events", {
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
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events/${event.id}`, {
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
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            },
        })
            .then(getEvents)
    }

    const unbookmarkEvent = eventId => {
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events/${eventId}/bookmark`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nssh_token")}`
            }
        })
            .then(getEvents)
    }


    const bookmarkEvent = eventId => {
        return fetch(`https://nashville-skillshare-hub-serve.herokuapp.com/events/${eventId}/bookmark`, {
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
            searchTerms, setSearchTerms, setEvents, getMyEvents,
            searchEvents, getMyBookmarks, searchDate
        }} >
            {props.children}
        </EventContext.Provider>
    )
}