import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { SearchEvents } from "./Search.js";


export const MyEventList = () => {
    const { events, getMyEvents } = useContext(EventContext)

    useEffect(() => {
        getMyEvents()
    }, [])

    return (
        <section>
            <h2 className="neon">My Events</h2>
            <SearchEvents />
            <div className="postList">
                {events.map(event => {
                    if (event.organizers === true) {
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
            {/* <Footer /> */}

        </section>
    )
}