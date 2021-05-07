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
                <h3> I am a form </h3>
            </div>
        )
    }
}
