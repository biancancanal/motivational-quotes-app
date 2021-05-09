import React, { Component } from 'react'

class QuoteDetails extends Component {
    state = {
        quotes: []
    }

    componentDidMount() {
        fetch(`http://localhost:3001/quotes${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                quotes: data
            })
        })
    }
    render() {
        // const quotes = this.state.quotes.map((q) => {q.id})
        return (
            <div>
                Full Quote
                {/* {quotes} */}
            </div>
        )
    }
}

export default QuoteDetails