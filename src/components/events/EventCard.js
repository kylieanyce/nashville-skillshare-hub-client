import React from "react"
import { Link } from "react-router-dom"


// renders each individual library post on the library page
export const EventCard = (event) => {

    return (
        < section className="eventCards" id={event.id} >
            <div className="alignCard">
                <div className="postImage">
                    {/* This makes the image a clickable link to take user to details page */}
                    <Link to={`/events/detail/${event.id}`}>
                        <h3 style={{ textTransform: 'capitalize' }}>
                            {event.title}
                        </h3>
                    </Link>
                    <h4 style={{ textTransform: 'capitalize' }}>{event.hosts}</h4>
                    <h4 style={{ textTransform: 'capitalize' }}>{new Date(event.date).toLocaleDateString("en-US")}</h4>
                    <h4 style={{ textTransform: 'capitalize' }}>{event.time}</h4>
                    <p style={{ textTransform: 'capitalize' }}>{event.description}</p>
                </div>
            </div>
        </section >
    )
}