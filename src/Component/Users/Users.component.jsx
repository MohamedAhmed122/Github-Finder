import React from "react";

import CardItem from "../CardItem/cardItem";

import Spinner from "../Spinner/Spinner.compent";
const Users = ({ loading ,users}) => (
  <div>
    {loading ? (
      <Spinner />
    ) : (
      <div className="container" style={userStyle}>
        {users.map((user) => (
          <CardItem key={user.id} user={user} />
        ))}
      </div>
    )}
  </div>
);

export default Users;

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGrap: "1rem",
};
