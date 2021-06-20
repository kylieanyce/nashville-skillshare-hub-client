import React from "react"
import "./BannerImage.css"


export const BannerImage = () => {
    return (
        <>
            <div className="bannerOverlay">
                <div className="bannerimgContainer">
                    <img className="bannerimg" src="../banner.jpg" />
                </div>
            </div>
        </>
    )
}