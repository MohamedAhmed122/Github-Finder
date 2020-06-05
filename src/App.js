import React, {
  Fragment,
  useState,
} from "react";
import "./App.css";
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

import GithubState from './Context/Github/githubState'

import AboutPage from './Pages/About/AboutPage'

const App = () => {
  
  const [alert, set_alert] = useState(null);


  //     Alert
  const setAlert = (msg, type) => {

    set_alert(msg, type);
    // setTimeout(() => {
    //   set_alert(null);
    //   setLoading(false);
    // }, 2000);
  }

  return (
     <GithubState>
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
                      />
                      <Alert alert={alert} />
                      <Users />
                  </Fragment>
                )}

              />
              <Route path='/about' component={AboutPage}/>
              <Route 
                  path='/user/:login' 
                  exact
                  render={props =>(
                    <GithubUser 
                      {...props}
                    />
                  )}
              />
            </Switch>
          </div> 
       </Router>
     </GithubState>
  );

}

export default App;

//https://api.github.com/users/MohamedAhmed122