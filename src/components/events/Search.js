import React, { useContext } from "react"
import { EventContext } from "../events/EventProvider";

// displays search bar
export const SearchEvent = () => {
    const { searchEvents, searchTerms } = useContext(EventContext)

    const handleSearch = (event) => {
        event.preventDefault()
        searchTerms[event.target.id] = event.target.value
        searchEvents(searchTerms)
    }

    // on key up, grabs value from target and sets search terms with it
    return (
        <>
            <div className="searchBar">
                <input type="text"
                    className="searchInput"
                    id="searchTerm"
                    placeholder="Search for an event... " />
                <button onSubmit={handleSearch}>Search</button>
            </div>
        </>
    )
}