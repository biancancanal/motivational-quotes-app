import React, { Component } from 'react'
import NewButton from '../components/NewButton'

export default class NewQuote extends Component {
    state = {
        id: "",
        quote: "",
        author: ""
    }

    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    
    render() {
        return (
            <div>
                <NewButton/>
                <form onSubmit={this.handleSubmit}>
                    <label>ID:</label><br/>
                    <input name="id" value={this.state} onChange={this.handleChange} type="text"/><br/>
                    <label>ID:</label><br/>
                    <input name="quote" value={this.state} onChange={this.handleChange} type="text"/><br/>
                    <label>ID:</label><br/>
                    <input name="author" value={this.state} onChange={this.handleChange} type="text"/><br/>
                </form>
                <h3> I am a form </h3>
            </div>
        )
    }
}
