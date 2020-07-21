import React, { Component } from "react";
import api from "../../services/api";

export default class Address extends Component {
  state = {
    user: {},
    address: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/address/${id}`);

    this.setState({ address: response.data });
  }

  loadUser = async () => {
    const response = await api.get(`/users/${this.props.match.params.id}`);

    this.setState({ user: response.data });
  };

  render() {
    this.loadUser();

    const { address, user } = this.state;

    return (
      <div className="address-info">
        <h1>{user.name} - Endereço</h1>
        <p>Rua: {address.street}</p>
        <p>nº {address.number}</p>
      </div>
    );
  }
}
