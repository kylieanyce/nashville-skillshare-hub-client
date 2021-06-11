import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "../events/EventsProvider";
import { EventCard } from "./EventCard"


export const MyEventList = () => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <section>
            <h2 className="neon">My Events</h2>
            <div className="myEventList">
                <MyEventList />
            </div>
        </section>
    )
}