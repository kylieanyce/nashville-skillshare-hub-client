import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { useHistory, useLocation } from 'react-router-dom';


export const EventList = (props) => {
    const { events, getEvents, searchTerms, getMyEvents } = useContext(EventContext)
    const history = useHistory();
    const location = useLocation();

    const [filteredEvents, setFiltered] = useState([])

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.search("myevents") === -1) {
            getEvents()
        } else {
            getMyEvents()
        }
    }, [location]);

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