import React from "react";
import RepoItem from "../RepoItem/RepoItem";

const Repo = ({repos}) => (
  <div>
    {repos.map((repo) => (
      <RepoItem key={repo.id} repo={repo} />
    ))}
  </div>
);

export default Repo;
