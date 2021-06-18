import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "../events/EventProvider";
import { EventCard } from "./EventCard"


export const BookmarkList = () => {
    const { events, getEvents } = useContext(EventContext)
    const currentUserId = parseInt(sessionStorage.getItem("nssh_token"))

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <section>
            <h2 className="neon">My Bookmarked Events</h2>
            <div className="postList">
                {events.map(event => {
                    if (event.bookmark === currentUserId) {
                        return <EventCard key={event.id}
                            id={event.id}
                            description={event.description}
                            title={event.title}
                            cost={event.cost}
                            datetime={event.datetime}
                            host={event.hosts}
                        />
                    }
                })}
            </div>
        </section>
    )
}