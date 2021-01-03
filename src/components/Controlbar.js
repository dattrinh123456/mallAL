import React, { Component } from 'react'

export default class Controlbar extends Component {
    state = {
        query: '',
        data: [],
    }
    handleInputChange = (event) => {
        const query =event.target.value
       this.setState({query})
        this.props.valueSearch(query)
    }
    render() {
        return (
            <div className="searchForm container">
          <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
            onSendData ={this.onSendData}
          />
        </form>
        
        </div>
        )
    }
}
