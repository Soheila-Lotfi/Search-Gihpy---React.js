import React, { Component } from "react";

class SearchResultConatiner extends Component {

    state = {
        search: "",
        results: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmitForm = event => {
        event.preventDefault();

        this.searchQuery(this.state.value);
    }

    searchQuery(query) {


    }

    render() {
        return (
            <>
                <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange}></input>
                <button type="submit" onClick={this.handleSubmitForm}>Submit</button>

            </>
        )
    }
}

export default SearchResultConatiner;