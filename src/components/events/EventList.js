import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"

export const EventList = (props) => {
    const { events, getEvents, searchTerms } = useContext(EventContext)

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
                    console.log(event)
                    return <EventCard key={event.id}
                        id={event.id}
                        description={event.description}
                        time={event.time}
                        date={event.date}
                        host={event.host} />
                })}
            </div>
        </div>
    )
}