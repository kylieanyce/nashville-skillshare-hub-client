import React, { useState, useContext } from "react"
import { EventContext } from "../events/EventProvider";

// displays search bar
export const SearchEvent = () => {
    const { searchEvents } = useContext(EventContext)
    const [searchTerms, setSearchTerms] = useState("")

    // on key up, grabs value from target and sets search terms with it
    return (
        <>
            <div className="searchBar">
                <label>Cost:
                    <input type="text"
                        className="searchInput"
                        onChange={(event) => {
                            event.preventDefault()
                            setSearchTerms(event.target.value)
                        }}
                        placeholder="Search for an event... " />
                </label>
                <button onClick={(event) => searchEvents(searchTerms)}>Search</button>
            </div>
        </>
    )
}