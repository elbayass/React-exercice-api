import React, { Component } from 'react';
import './User_full.css'


class User_full extends Component {
  render() {
    return (
        <div className="user_full">
            <h6> followers : {this.props.followers}</h6>
            <h6> name : {this.props.name}</h6>
            <h6> public repos : {this.props.public_repos}</h6>
            <h6> bio : {this.props.bio}</h6>
        </div>
    );
  }
}

export default User_full;