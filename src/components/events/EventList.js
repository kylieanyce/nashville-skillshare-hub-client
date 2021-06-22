import React, { useState, useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import { EventCard } from "./EventCard.js"
import { useHistory, useLocation } from 'react-router-dom';
import { SearchEvents } from "../bannerSearch/Search.js";
import { BannerImage } from "../bannerSearch/Banner.js"
// import { Header } from "../Header.js";
// import { Footer } from "../Footer.js";
import "./EventList.css"


export const EventList = (props) => {
    const { events, setEvents, getEvents, searchTerms, getMyEvents } = useContext(EventContext)
    const history = useHistory();
    const location = useLocation();
    const [myEvents, setMyEvents] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.search("myevents") === -1) {
            getEvents()
        } else {
            setMyEvents(true);
            getMyEvents()
        }
    }, [location]);

    // useEffect(() => {
    //     if (searchTerms !== "") {
    //         const subset = events.filter(event => event.description.toLowerCase().includes(searchTerms) || event.description.toLowerCase().includes(searchTerms))
    //         setEvents(subset)
    //     }
    // }, [searchTerms])

    return (
        <>
            {/* <Header /> */}


            {/* <BannerImage /> */}
            <SearchEvents />
            <div className="eventPosts">
                {myEvents ? <h2 className="neon">My Events</h2> : <h2 className="neon">Explore Upcoming Events</h2>}
                <div className="addContainer">
                    {myEvents ? "" : <button className="addButton" onClick={() => history.push("/events/new")}>Add an Event</button>}
                </div>
                <div className="eventList">
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
                                    // hosts={event.hosts}
                                    />
                                </>
                            )
                        }
                    })}
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}