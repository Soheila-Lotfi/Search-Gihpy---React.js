import React, {Component} from "react";

class SearchResultConatiner extends Component {

    state={
        search :"",
        results: []
    }
    render(){
        return (
            <>
            <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange}></input>
            <button type="submit" onClick={this.handleSubmitForm}>Submit</button>
            </>
        )
    }
}