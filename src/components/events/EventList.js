import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { useHistory, useLocation } from 'react-router-dom';


export const EventList = (props) => {
    const { events, setEvents, getEvents, searchTerms, getMyEvents, deleteEvent } = useContext(EventContext)
    const history = useHistory();
    const location = useLocation();
    const [myEvents, setMyEvents] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.search("myevents") === -1) {
            getEvents()
        } else {
            setMyEvents(true);
            getMyEvents()
        }
    }, [location]);

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = events.filter(event => event.description.toLowerCase().includes(searchTerms) || event.description.toLowerCase().includes(searchTerms))
            setEvents(subset)
        }
    }, [searchTerms])

    return (
        <>

            <div className="eventPosts">
                {myEvents ? <h2 className="neon">My Events</h2> : <h2 className="neon">Explore Upcoming Events</h2>}
                <div className="postList">
                    {events.map(event => {
                        {
                            return (
                                <>
                                    <EventCard key={event.id}
                                        id={event.id}
                                        description={event.description}
                                        title={event.title}
                                        datetime={event.datetime}
                                        host={event.hosts}
                                    />
                                </>
                            )
                        }
                    })}

                    {myEvents ? "" : <button onClick={() => history.push("/events/new")}>Add an Event</button>}

                </div>
            </div>
        </>
    )
}