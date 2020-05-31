import React from "react";
import "./App.css";
import User from "./Component/Users/Users.component";
import axios from "axios";
import Navbar from "./Component/NavBar/NavBar.component";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios(`https://api.github.com/users?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
    console.log(response.data);
    this.setState({ users: response.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <User users={this.state.users} loading={this.state.loading} />
        <h2>Hello from react</h2>
      </div> 
    );
  }
}

export default App;
