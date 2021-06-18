import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { SearchEvents } from "./Search.js";

export const BookmarkList = () => {
    const { events, getMyBookmarks } = useContext(EventContext)

    useEffect(() => {
        getMyBookmarks()
    }, [])

    return (
        <section>
            <h2 className="neon">My Bookmarked Events</h2>
            <SearchEvents />
            <div className="postList">
                {events.map(event => {
                    return <EventCard key={event.id}
                        id={event.id}
                        description={event.description}
                        title={event.title}
                        cost={event.cost}
                        datetime={event.datetime}
                        host={event.hosts}
                    />
                })}
            </div>
        </section>
    )
}