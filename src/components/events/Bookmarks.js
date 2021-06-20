import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { SearchEvents } from "../bannerSearch/Search.js";
import "./EventList.css"


export const BookmarkList = () => {
    const { events, getMyBookmarks } = useContext(EventContext)

    useEffect(() => {
        getMyBookmarks()
    }, [])

    return (
        <section>
            <SearchEvents />
            <h2 className="neon">My Bookmarked Events</h2>
            <div className="eventList">
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