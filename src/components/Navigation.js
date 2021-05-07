import { NavLink } from 'react-router-dom'

import React from 'react'

const link = {
    width: '100px',
    padding: '12 px',
    margin: '0 6px 6 px',
    textDecoration: 'none',
    color: "white",
    background: "blue"
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Home</NavLink>

            <NavLink
                to="/quotes"
                exact
                style={link}
                activeStyle={{
                background: 'darkblue'
                }}
            >Quotes</NavLink>

            {/* <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Add A Quote</NavLink> */}
        </div>
    )
}

export default Navigation