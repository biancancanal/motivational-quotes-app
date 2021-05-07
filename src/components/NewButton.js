import React from 'react'
import { Link } from 'react-router-dom'

 const NewButton = () => {
    return (
        <div>
            <Link to={'/quotes/new'}>
                <button>New Quote</button>
            </Link>
        </div>
    )
}

export default NewButton