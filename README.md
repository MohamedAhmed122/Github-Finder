This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




### how to create context api

1- create a folder (context) => there will be 3 files 1-For create context 2- for the reducer 3- for the state


### create context *Easy one*
import { createContext } from 'react';

const githubContext = createContext();

export default githubContext;

this all i have to do  *;

### the reducer *the intermediate one

1-create an function and takes to parameters one for state and one for action 
2- you do switch statement
3- you siad if the action is " " return " "
just like that
const GithubReducer = (state, action)
{
    switch(action.type){
        case SEARCH_USERS:
                return {
                    ...state,
                    users: action.payload,
                    loading:false
                }
                default:
                    return state;
    }
} 


### the state *the hard one*
1- you wanna get all props that you have in App.js here 

2- copy the functions from app.js to the state.js

3- the provider

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(GithubReducer, initialState);
    
 const searchUsers = async query =>  

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

//     // get Repo

//     //clear User

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
      
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}