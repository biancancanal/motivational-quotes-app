import React, { Component } from 'react'

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
        const quotes = this.state.quotes.map(q => <li>{q.quote}</li>)
        return (
            <div>
                <h3>Quotes</h3>        
                <hr/>
                {quotes}
                <br/>
                <button>New Quote</button>
            </div>
        )
    }
}

export default Quotes