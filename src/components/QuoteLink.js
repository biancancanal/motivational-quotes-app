import React from 'react'
import { Link } from 'react-router-dom'

export const QuoteLink = ({quote}) => {
    return (
        <div>
            <Link to={`/quotes/${quote.id}`}>
                <li>{quote.keyword}</li>
            </Link>
        </div>
    )
}
