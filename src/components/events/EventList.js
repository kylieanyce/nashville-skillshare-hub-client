import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { useHistory, useLocation } from 'react-router-dom';
import { SearchEvents } from "./Search.js";


export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)
    const history = useHistory();

    useEffect(() => {
        getEvents()
    }, []);

    return (
        <>
            <div className="eventPosts">
                <h2 className="neon">My Bookmarked Events</h2>
                <SearchEvents />
                <div className="postList">
                    {events.map(event => {
                        {
                            return (
                                <>
                                    <EventCard key={event.id}
                                        id={event.id}
                                        description={event.description}
                                        title={event.title}
                                        cost={event.cost}
                                        datetime={event.datetime}
                                        host={event.hosts}
                                    />
                                </>
                            )
                        }
                    })}
                </div>

                <button onClick={() => history.push("/events/new")}>Add an Event</button>

            </div>
        </>
    )
}