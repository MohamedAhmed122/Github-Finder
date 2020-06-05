import React, { useContext } from "react";

import RepoItem from "../RepoItem/RepoItem";

import GithubContext from '../../Context/Github/githubContext'


const Repo = () => {
  const githubContext = useContext(GithubContext)
return(
  <div>
    {githubContext.repos.map((repo) => (
      <RepoItem key={repo.id} repo={repo} />
    ))}
  </div>
);
}
export default Repo;
