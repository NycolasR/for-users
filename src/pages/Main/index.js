import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./style.css";

export default class Main extends Component {
  state = {
    users: [],
    usersInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async (page = 1) => {
    const response = await api.get(`/users?page=${page}`);

    const { docs, ...usersInfo } = response.data;

    this.setState({ users: docs, usersInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadUsers(pageNumber);
  };

  nextPage = () => {
    const { page, usersInfo } = this.state;

    if (page === usersInfo.pages) return;

    const pageNumber = page + 1;

    this.loadUsers(pageNumber);
  };

  render() {
    const { users, usersInfo, page } = this.state;

    return (
      <div className="users-list">
        {users.map((user) => (
          <article key={user._id}>
            <h1>{user.name}</h1>
            <p>E-mail: {user.email}</p>
            <p>Nascimento: {user.birthday}</p>

            <Link to={`/users/${user._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === usersInfo.pages} onClick={this.nextPage}>
            Próxima
          </button>
        </div>
      </div>
    );
  }
}
