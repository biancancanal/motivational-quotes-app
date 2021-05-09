import React, { Component } from 'react'

class QuoteDetails extends Component {
    state = {
        fullQuote: {
            keyword: "", 
            quote: "",
            author: ""
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/quotes/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                fullQuote: data
            })
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.fullQuote.keyword}</h2>
                <h4>Quote: {this.state.fullQuote.quote}</h4>
                <h4>Author: {this.state.fullQuote.author}</h4>
            </div>
        )
    }
}

export default QuoteDetails