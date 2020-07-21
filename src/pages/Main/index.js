import React, { Component } from "react";
import api from "../../services/api";

import "./style.css";

export default class Main extends Component {
  state = {
    users: [],
    userInfo: {},
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const response = await api.get("/users");

    const { docs, ...userInfo } = response.data;

    this.setState({ users: docs, userInfo });

    console.log(this.state.users);
  };

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <div className="users-list">
        {users.map((user) => (
          <article key={user._id}>
            <strong>{user.name}</strong>
            <p>E-mail: {user.email}</p>
            <p>Nascimento: {user.birthday}</p>

            <a href="#">Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button>Anterior</button>
          <button>Próxima</button>
        </div>
      </div>
    );
  }
}
