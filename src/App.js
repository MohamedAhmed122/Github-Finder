import React, {
  Fragment,
  useState,
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

// import { FetchData } from './FetchData'

import AbotPage from './Pages/About/AboutPage'

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCase, setShowCase] = useState(true);
  const [alert, set_alert] = useState(null);


  //     fetch the data
  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   });
  //   const response = await axios(`https://api.github.com/users?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
  //   // console.log(response.data);
  //   this.setState({
  //     users: response.data,
  //     loading: false,
  //   });
  // }

// useEffect(()=>{
//   setUsers(FetchData);
//   setLoading(false)
// },[])

  //      search users
  const searchUser = async query => {

    setLoading(true);
    const response = await axios(`https://api.github.com/search/users?q=${query}&client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);

    setUsers(response.data.items);
    setLoading(false);
    setShowCase(false);
  }


  //    get Users
  const getUser = async username => {

    setLoading(true);
    const response = await axios(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);

    setUser(response.data);
    setLoading(false);
    setShowCase(false);
  }



  //   get Repos

  const gutRepos = async username => {

    setLoading(true);
    const response = await axios(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);
    console.log(response.data);

    setRepos(response.data);
    setLoading(false);
    setShowCase(false);


  }



  ///     clear users
  const clearUsers = async () => {
    const response = await axios(`https://api.github.com/users?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);

    setUsers(response.data);
    setLoading(false);
    setShowCase(true);
  }


  //     Alert
  const setAlert = (msg, type) => {

    set_alert(msg, type);
    setTimeout(() => {
      set_alert(null);
      setLoading(false);
    }, 2000);
  }

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
                      setAlert={setAlert} 
                      clearUsers={clearUsers} 
                      searchUser={searchUser} 
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
                exact
                render={props =>(
                  <GithubUser 
                    {...props} 
                    user={user} 
                    getUser={getUser}
                    loading={loading}
                    repos={repos} 
                    getRepos={gutRepos}
                  />
                )}
             />
          </Switch>
       </div> 
     </Router>
  );

}

export default App;

//https://api.github.com/users/MohamedAhmed122