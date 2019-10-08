import React, { Component } from "react";
import API from "../utils/API";

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

        API(query).then(res => this.setState({ results: res.data.data })).catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <lable  className="ml-5 mt-5"htmlFor="search">Search Giphy:</lable><br/>
                <input className="ml-5 " type="text" name="search" value={this.state.search} onChange={this.handleInputChange}></input> {" "} <br />
                <button className="btn btn-primary mt-3 ml-5" type="submit" onClick={this.handleSubmitForm}>Submit</button>
                <ul className="list-group">
                    {this.state.results.map(result => (

                        <li className="list-group-item" key={result.id}><img alt={result.title} src={result.images.original.url}></img></li>
                    ))}
                </ul>
            </>
        )
    }
}

export default SearchResultConatiner;