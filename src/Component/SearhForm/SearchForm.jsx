import React, { useState, useContext } from "react";
import GithubContext from "../../Context/Github/githubContext";

const SearchForm = ({ setAlert }) => {
  const [search, setSearch] = useState("");

  const githubContext = useContext(GithubContext);

  const handleSumbit = (event) => {
    event.preventDefault();
    if (search === "") {
      setAlert("Please, enter text in the search bar", "light");
    } else {
      // how to pass props to the the Appjs
      githubContext.searchUsers(search);
      setSearch("");
    }
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSumbit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={search}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 ? (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      ) : null}
      {/* another way to send the props to other component */}
    </div>
  );
};

export default SearchForm;
