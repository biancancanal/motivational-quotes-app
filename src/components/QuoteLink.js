import React from 'react'
import { Link } from 'react-router-dom'

const QuoteLink = ({quote}) => {
    return (
        <div>
            <Link to={`/quotes/${quote.id}`}>
                <li>{quote.keyword}</li>
            </Link>
        </div>
    )
}

export default QuoteLink