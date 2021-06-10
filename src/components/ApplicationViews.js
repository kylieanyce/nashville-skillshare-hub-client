import React from "react"
import { Route } from "react-router-dom"
import { EventForm } from "./events/CreateEditForm"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <EventProvider>
                <Route exact path="/home">
                    <EventList />
                </Route>
                <Route exact path="/create" >
                    <EventForm />
                </Route>
            </EventProvider>
        </main>
    </>
}