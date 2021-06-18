import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

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
                    <h5>{moment(event.datetime).format('L')}</h5>
                    <h5>{moment(event.datetime).format('LT')}</h5>
                    <p>{event.cost}</p>
                    <p>{event.description}</p>
                </div>
            </div>
        </section >
    )
}