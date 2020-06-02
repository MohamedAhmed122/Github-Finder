import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    search: "",
  };
  handleSumbit = (event) => {
    event.preventDefault();
    if(this.state.search === ''){
        this.props.setAlert('Please, enter text in the search bar', 'light');
    }
    // how to pass props to the the Appjs
    this.props.searchUser(this.state.search);
    this.setState({search: ''});
  };
  handleChange = (event) => {
    this.setState({ search: event.target.value });
    
  };
  render() {
    const { showCase, clearUsers } = this.props;
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSumbit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.search}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {!showCase ? (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        ) : null}
        {/* another way to send the props to other component */}
      </div>
    );
  }
}

export default SearchForm;
