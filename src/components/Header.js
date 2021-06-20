import React from "react"
import "./Header.css"

export const Header = () => {
    return (
        <>
            <div className="headerOverlay">
                <div className="header">
                    <header>
                        {/* <img className="logo" src="../logo.png" alt="Nashville SkillShare Hub logo" /> */}

                        <div className="titleContainer"><h1 className="title">Nashville SkillShare Hub</h1></div>
                    </header>
                </div>
            </div>
        </>
    )
}