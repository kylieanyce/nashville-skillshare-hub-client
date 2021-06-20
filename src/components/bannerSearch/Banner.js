import React from "react"
import "./Banner.css"


export const BannerImage = () => {
    return (
        <>
            <div className="bannerOverlay">
                <div className="banner">
                    <img className="bannerimg" src="../banner.jpg" />
                </div>
            </div>
        </>
    )
}