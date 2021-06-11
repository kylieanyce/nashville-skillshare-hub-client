import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { useHistory } from 'react-router-dom';


export const EventList = (props) => {
    const { events, getEvents, searchTerms, getMyEvents } = useContext(EventContext)
    const history = useHistory();

    const [filteredEvents, setFiltered] = useState([])

    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = events.filter(event => event.description.toLowerCase().includes(searchTerms) || event.description.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(events)
        }
    }, [searchTerms, events])

    return (
        <div className="eventPosts">
            <h2 className="neon">Explore Upcoming Events</h2>
            <div className="postList">
                {filteredEvents.map(event => {
                    return <EventCard key={event.id}
                        id={event.id}
                        description={event.description}
                        title={event.title}
                        datetime={event.datetime}
                        host={event.hosts} />
                })}
            </div>
            <button onClick={() => history.push("/events/new")}>Add an Event</button>
        </div>
    )
}