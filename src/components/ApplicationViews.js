import React from "react"
import { Route } from "react-router-dom"
import { EventForm } from "./events/CreateEditForm"
import { EventDetails } from "./events/Details"
import { EventList } from "./events/EventList"
import { BookmarkList } from "./events/Bookmarks"
import { EventProvider } from "./events/EventProvider"
import { Home } from "./Home.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            // lineHeight: "1.75rem"
        }}>
            <EventProvider>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/events">
                    <EventList />
                </Route>
                <Route exact path="/events/myevents">
                    <EventList />
                </Route>
                <Route exact path="/events/mybookmarks">
                    <BookmarkList />
                </Route>
                <Route exact path="/events/new" >
                    <EventForm />
                </Route>
                <Route exact path="/events/:eventId(\d+)/edit" >
                    <EventForm />
                </Route>
                <Route exact path="/events/detail/:eventId(\d+)" >
                    <EventDetails />
                </Route>
            </EventProvider>
        </main>
    </>
}