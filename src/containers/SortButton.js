import React, { Component } from 'react'

class SortButton extends Component {
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
    handleSort = () => {
        this.setState((prevState) => {
            const sortedArray = prevState.quotes.sort((a, b) => {
                // console.log(a["keyword"]>b["keyword"])
                if (a["keyword"]>b["keyword"]) {
                    return 1 
                }
                else {
                    return -1
                }
            })
            console.log(sortedArray)
            return {
                quotes: sortedArray
            }
        })
    }
    
    render () {
        return (
            <div>
                <button onClick={this.handleSort}>ABC Order</button>
            </div>
        )
    }
}

export default SortButton