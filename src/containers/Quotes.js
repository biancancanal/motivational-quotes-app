import React, { Component } from 'react'
import NewButton from '../components/NewButton'
import QuoteLink from '../components/QuoteLink'
import SortButton from '../containers/SortButton'

 class Quotes extends Component {
    state = {
        quotes: []
    }

componentDidMount() {
    fetch('http://localhost:3001/quotes')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        this.setState({
            quotes: data
        })
    })
}



    render() {
        const quotes = this.state.quotes.map(q => <QuoteLink key={q.id} quote={q}/>)
        console.log(this.state.quotes)
        return (
            <div className="App-header">
                <h3>Quotes</h3>        
                {quotes}
                <br/>
                <NewButton/>
                <br/>
                <SortButton />
                <img src= "/images/quotes.png" alt="Quote Cartoon"/>
            </div>
        )
    }
}

export default Quotes