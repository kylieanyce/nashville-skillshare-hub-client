import React from "react"
import "./Header.css"

export const Header = () => {
    return (
        <>
            <div className="headerOverlay">
                <div className="header">
                    <header>
                        <div className="logo"><div></div></div>
                        <div className="titleContainer"><h1 className="title">Nashville SkillShare Hub</h1></div>
                    </header>
                </div>
            </div>
        </>
    )
}