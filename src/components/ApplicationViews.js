import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <EventProvider>
                <Route>
                    <EventList />
                </Route>
            </EventProvider>
        </main>
    </>
}