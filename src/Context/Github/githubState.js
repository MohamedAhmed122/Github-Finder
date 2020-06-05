import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
  } from '../types';
  
//   let githubClientId;
//   let githubClientSecret;
  
//   if (process.env.NODE_ENV !== 'production') {
//     githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
//     githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
//   } else {
//     githubClientId = process.env.GITHUB_CLIENT_ID;
//     githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
//   }
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(GithubReducer, initialState);
 

 const searchUsers = async query => {

    setLoading();
    const response = await axios(
        `https://api.github.com/search/users?q=${query}&client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);

    dispatch({
        type: SEARCH_USERS,
        payload: response.data.items
    })

    // setShowCase(false);
  }

//     //get user
  //    get Users
  const getUser = async username => {

    setLoading();
    const response = await axios(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);

    
  dispatch({
    type: GET_USER,
    payload:response.data
  })
  }

//     // get Repo

const getRepos = async username => {

  setLoading();
  const response = await axios(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID }&client_secret=${process.env.CLIENT_SECRET}`);

  dispatch({
    type: GET_REPOS,
    payload:response.data
  })

}

//     //clear User
const clearUsers = ()=> {
  dispatch({type:CLEAR_USERS})
}
//     // Set Loading
   const setLoading =()=> dispatch({type: SET_LOADING}) 


     return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepos
      
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}

export default GithubState;