import React from "react";

import Spinner from "../Spinner/Spinner.compent";

import Repo from '../Repos/Repo'

import { Link } from "react-router-dom";

class User extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }
  render() {
    const {
      login,
      avatar_url,
      html_url,
      name,
      blog,
      location,
      hireable,
      bio,
      public_repos,
      followers,
      following,
      company,
      public_gists
    } = this.props.user;
    if (this.props.loading) return <Spinner />;
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="my-2">
          <Link to="/" className="btn btn-dos">
            Back to Search
          </Link>
          Hireable:
          {hireable ? (
            <i className="fa fa-check text-success" />
          ) : (
            <i className="fa fa-times-circle text-danger" />
          )}
        </div>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="avatar"
              className="round-img"
              style={{ width: "200px" }}
            />
            <h1>{name}</h1>
            <p>Location : {location} </p>
          </div>
          <div>
            {bio ? (
              <div>
                <h3>Bio</h3>
                <p>{bio}</p>{" "}
              </div>
            ) : null}
            <a href={html_url} className="btn btn-dark my-2">
              Visit my Github Profile
            </a>
            <ul>
              <li>
                {login ? (
                  <div>
                    {" "}
                    <strong>username:  </strong>
                    {login}{" "}
                  </div>
                ) : null}
              </li>
              <li>
                {blog ? (
                  <div>
                    {" "}
                    <strong>Blog:  </strong>
                    {blog}{" "}
                  </div>
                ) : null}
              </li>
              <li>
                {company ? (
                  <div>
                    {" "}
                    <strong>company:  </strong>
                    {company}{" "}
                  </div>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
            <div className='badge badge-primary' >Followers:  {followers}</div>
            <div className='badge badge-success' >Following:  {following}</div>
            <div className='badge badge-primary2' >Public Repo:  {public_repos}</div>
            <div className='badge badge-dark' >Public  Gists:  {public_gists}</div>
        </div>
        <Repo repos={this.props.repos} />
      </div>
    );
  }
}
export default User;
