import React, { Component } from "react";
import API from "../utils/API";

const styles = {
    img: {
        width: "200px",
        height: "200px"
    }
};
class SearchResultConatiner extends Component {


    state = {
        search: "",
        results: []
    }
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.searchQuery("smile");
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
                <lable className="ml-5 mt-5" htmlFor="search">Search Giphy:</lable><br />
                <input className="ml-5 " type="text" name="search" value={this.state.search} onChange={this.handleInputChange}></input> {" "} <br />
                <button className="btn btn-primary mt-3 ml-5 mb-3" type="submit" onClick={this.handleSubmitForm}>Submit</button><br />

                {this.state.results.map(result => (

                    <img className="ml-4 mb-3" key={result.id} style={styles.img} alt={result.title} src={result.images.original.url}></img>
                ))}

            </>
        )
    }
}

export default SearchResultConatiner;