import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <>
        <bs.Navbar expand="lg">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img width="75px" height="75px" alt="Paradise Donuts" src="https://paradise-donut-images.s3.amazonaws.com/isaac-quesada-0kF7wNPl1kk-unsplash.jpg" />
                </bs.Navbar.Brand>
            </Link>
            <h1 style={{textAlign:"center", marginRight: "50px" }}>Paradise Donuts</h1>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link">All of the Deliciousness</Link>
                    <Link to="/donuts/Glazed" className="nav-link">Glazed</Link>
                    <Link to="/donuts/Specialty" className="nav-link">Specialty</Link>
                    <Link to="/donuts/Filled" className="nav-link">Filled</Link>
                    <Link to="/donuts/Seasonal" className="nav-link">Seasonal</Link>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
        </>
    )
}

export default Header