import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "../events/EventProvider";
import { EventList } from "./EventList.js"


export const MyEventsList = () => {
    const { events, getMyEvents } = useContext(EventContext)

    useEffect(() => {
        getMyEvents()
    }, [])

    return (
        <section>
            <h2 className="neon">Events I Am Hosting</h2>
            <div className="postList">
                {events.map(event => {
                    return <EventList key={event.id} event={event} />
                })}
            </div>
        </section>
    )
}