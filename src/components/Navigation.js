import { NavLink } from 'react-router-dom'
import React from 'react'

const link = {
    width: '200px',
    border: '10px solid black' ,
    padding: '12 px',
    margin: '0px',
    textDecoration: 'none',
    color: "white",
    background: "black"
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: '#282c34'
                }}
            >Home</NavLink>

            <NavLink
                to="/quotes"
                exact
                style={link}
                activeStyle={{
                background: '#282c34'
                }}
            >Quotes</NavLink>
        </div>
    )
}

export default Navigation