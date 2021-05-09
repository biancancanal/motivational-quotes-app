import React, { Component } from 'react'
import NewButton from '../components/NewButton'
import QuoteLink from '../components/QuoteLink'

 class Quotes extends Component {
    state = {
        quotes: []
    }

componentDidMount() {
    fetch('http://localhost:3001/quotes')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        this.setState({
            quotes: data
        })
    })
}
    render() {
        const quotes = this.state.quotes.map(q => <QuoteLink key={q.id} quote={q}/>)
        return (
            <div>
                <h3>Quotes</h3>        
                <hr/>
                {quotes}
                <br/>
                <NewButton/>
            </div>
        )
    }
}

export default Quotes