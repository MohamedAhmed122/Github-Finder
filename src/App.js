import React, {
  Fragment
} from "react";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Users from "./Component/Users/Users.component";
import Search from './Component/SearhForm/SearchForm'
import Navbar from "./Component/NavBar/NavBar.component";
import Alert from './Component/Alert/Alertt'
import GithubUser from './Component/User/User'

import AbotPage from './Pages/About/AboutPage'

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    showCase: true,
    alert: null,
    user: {}
  };

  //     fetch the data
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


  //      search users
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


  //    get Users
  getUser = async username => {
    console.log(username);
    this.setState({
      loading: true
    });
    const response = await axios(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
    console.log(response.data);
    this.setState({
      user: response.data,
      loading: false,
      showCase: false
    });
  }



  ///     clear users
  clearUsers = async () => {
    const response = await axios(`https://api.github.com/users?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
    this.setState({
      users: response.data,
      loading: false,
      showCase: true
    });
  }


  //     Alert
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type
      }
    })
    setTimeout(() => {
      this.setState({
        alert: null,
        loading: false
      })
    }, 2000);
  }

  render() {
    const {user, users, loading, showCase, alert} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={() =>(
                <Fragment>
                    <Search
                      setAlert={this.setAlert} 
                      clearUsers={this.clearUsers} 
                      searchUser={this.searchUser} 
                      showCase={showCase}
                    />
                    <Alert alert={alert} />
                    <Users users={users} loading={loading} />
                </Fragment>
              )}

            />
             <Route path='/about' component={AbotPage}/>
             <Route 
                path='/user/:login' 
                render={props =>(
                  <GithubUser 
                    {...props} 
                    user={user} 
                    getUser={this.getUser}
                    loading={loading}
                  />
                )}
             />
          </Switch>
       </div> 
     </Router>
    );
  }
}

export default App;

//https://api.github.com/users/MohamedAhmed122