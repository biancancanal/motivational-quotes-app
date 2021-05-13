import React from 'react'
import { Link } from 'react-router-dom'
const QuoteLink = ({quote}) => {
    return (
        <div>
            <li>
            <Link to={`/quotes/${quote.id}`}>
                {quote.keyword} 
            </Link>
            </li>
        </div>
    )
}

export default QuoteLink