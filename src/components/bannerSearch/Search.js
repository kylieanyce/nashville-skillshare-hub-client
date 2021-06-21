import React, { useState, useContext } from "react"
import { EventContext } from "../events/EventProvider";
import "./Search.css"

// displays search bar
export const SearchEvents = () => {
    const { searchEvents, searchDate } = useContext(EventContext)
    const [searchCost, setSearchCost] = useState("")
    const [searchDatetime, setSearchDatetime] = useState("")

    // on key up, grabs value from target and sets search terms with it
    return (
        <>
            <div className="searchBar">
                <div className="searchInputTransparent">
                    {/* <div className="banner">
                        <img className="bannerimg" src="../banner.jpg" />
                    </div> */}
                    <div className="inputFields">
                        <div className="inputs">
                            <label className="inputdiv">Cost:
                                <input type="text"
                                    className="searchInput inputdiv"
                                    onChange={(event) => {
                                        event.preventDefault()
                                        setSearchCost(event.target.value)
                                    }}
                                    placeholder="Free... " />
                            </label>
                            <div className="inputdiv inputbutton" onClick={(event) => searchEvents(searchCost)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="inputs">
                            <label className="inputdiv">Date:
                                <input type="date"
                                    className="searchInput inputdiv"
                                    onChange={(event) => {
                                        event.preventDefault()
                                        setSearchDatetime(event.target.value)
                                    }}
                                    placeholder="Free... " />
                            </label>
                            <div className="inputdiv inputbutton" onClick={(event) => searchDate(searchDatetime)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}