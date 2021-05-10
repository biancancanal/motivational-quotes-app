import React from 'react'
import { Link } from 'react-router-dom'
const QuoteLink = ({quote}) => {
    // const deleteQuote = (quote) => {
    //     console.log(quote)
    //     fetch(`http://localhost:3001/quotes/${this.props.match.params.id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     })
    //     .then(res => res.json())
    // }
    
    return (
        <div>
            <li>
            <Link to={`/quotes/${quote.id}`}>
                {quote.keyword} 
            </Link>
            {/* <button onChange={deleteQuote}> x </button> */}
            </li>
        </div>
    )
}

export default QuoteLink