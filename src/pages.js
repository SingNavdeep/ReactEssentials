import React from "react"
import {Link, useLocation, Outlet} from "react-router-dom"

export function Home() {
    return (
        <div>
            <h1>Company Website</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    );
}

export function History() {
    return (
        <div>
            <h2>Our History</h2>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>Company Events</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>Company Contact</h1>
        </div>
    );
}

export function NotExists() {
    let location = useLocation();
    return (
        <div>
            <h1>Resource at {location.pathname} does not exist!!</h1>
        </div>
    );
}