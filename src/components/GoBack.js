import React from 'react'
import { Link } from 'react-router-dom'

 const GoBack = () => {
    return (
        <div>
            <Link to={'/quotes'}>
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default GoBack