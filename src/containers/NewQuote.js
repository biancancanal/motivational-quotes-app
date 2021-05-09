import React, { Component } from 'react'

export default class NewQuote extends Component {
    state = {
        keyword: "", 
        quote: "",
        author: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/quotes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(data => {
            console.log("New Quote", data)
            this.props.history.push('/quotes')
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Add A New Quote!</h1>
                    <label>Key Words:</label><br/>
                    <input name="keyword" value={this.state.keyword} onChange={this.handleChange} type="text"/><br/>
                    <label>Quote:</label><br/>
                    <textarea name="quote" value={this.state.quote} onChange={this.handleChange} /><br/>
                    <label>Author:</label><br/>
                    <input name="author" value={this.state.author} onChange={this.handleChange} type="text"/><br/>
                    <br></br>                    
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
