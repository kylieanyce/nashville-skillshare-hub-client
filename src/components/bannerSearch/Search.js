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
                        <div>
                            <label>Cost:
                                <input type="text"
                                    className="searchInput"
                                    onChange={(event) => {
                                        event.preventDefault()
                                        setSearchCost(event.target.value)
                                    }}
                                    placeholder="Free... " />
                            </label>
                            <button onClick={(event) => searchEvents(searchCost)}>Search</button>
                        </div>
                        <div>
                            <label>Date:
                                <input type="date"
                                    className="searchInput"
                                    onChange={(event) => {
                                        event.preventDefault()
                                        setSearchDatetime(event.target.value)
                                    }}
                                    placeholder="Free... " />
                            </label>
                            <button onClick={(event) => searchDate(searchDatetime)}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}