import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import "./NashSSHub.css"
export const NashSSHub = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("nssh_token")) {
                return <>
                    <Route render={NavBar} />
                    <Header />
                    <Route render={props => <ApplicationViews {...props} />} />
                    <Footer />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)