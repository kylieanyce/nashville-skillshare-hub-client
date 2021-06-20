import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

// renders each individual library post on the library page
export const EventCard = (event) => {

    return (
        < section className="eventCards" id={event.id} >
            <div className="alignCard">
                <div className="eventHeader">
                    {/* This makes the image a clickable link to take user to details page */}
                    <Link to={`/events/detail/${event.id}`}>
                        <h3 style={{ textTransform: 'capitalize' }}>
                            {event.title}
                        </h3>
                    </Link>
                    {/* <p style={{ textTransform: 'capitalize' }}><strong>Hosted By: </strong>{event.hosts}</p> */}
                    <p><strong>Date:</strong> {moment(event.datetime).format('L')}</p>
                    <p><strong>Time:</strong> {moment(event.datetime).format('LT')}</p>
                    <p><strong>Cost:</strong> {event.cost}</p>
                    <p><strong>Description:</strong> {event.description}</p>
                </div>
            </div>
        </section >
    )
}