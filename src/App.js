import React from "react";
import "./App.css";
import axios from "axios";
import User from "./Component/Users/Users.component";
import Search from './Component/SearhForm/SearchForm'
import Navbar from "./Component/NavBar/NavBar.component";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    showCase:true
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    const response = await axios(`https://api.github.com/users?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
    console.log(response.data);
    this.setState({
      users: response.data,
      loading: false,
    });
  }
  searchUser = async query => {
    console.log(query);
    this.setState({
      loading: true
    });
    const response = await axios(`https://api.github.com/search/users?q=${query}&client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
    console.log(response.data);
    this.setState({
      users: response.data.items,
      loading: false,
      showCase: false
    });
  }
  clearUsers = async() =>{
    const response = await axios(`https://api.github.com/users?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
    this.setState({
      users: response.data,
      loading: false,
      showCase:true
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search clearUsers={this.clearUsers} searchUser={this.searchUser} showCase={this.state.showCase}/>
        <User users={this.state.users} loading={this.state.loading} />
    </div> 
    );
  }
}

export default App;