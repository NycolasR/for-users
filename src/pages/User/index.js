import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

export default class User extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/${id}`);

    this.setState({ user: response.data });
  };

  calcAge = (birthday) => {
    const actualYear = new Date().getFullYear();
    const birthdayYear = new Date(birthday).getFullYear();

    return actualYear - birthdayYear;
  };

  render() {
    const { user } = this.state;
    const { birthday } = user;

    const age = this.calcAge(birthday);

    return (
      <div className="user-info">
        <h1>{user.name}:</h1>
        <p>E-mail: {user.email}</p>
        <p>
          Data de nascimento: {user.birthday} ({age} anos de idade)
        </p>

        <Link to={`/users/address/${user._id}`}>Ver Endereço</Link>
      </div>
    );
  }
}
