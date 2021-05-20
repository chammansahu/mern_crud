import React, { Component } from 'react'
import '../components/registerStyle.css'
import axios from 'axios';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password_1: "",
      password_2: "",
    };
  }
  handleNameChange = (e) => {
    this.setState({ userName: e.target.value });
   
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
    
  };
  handlePassOneChange = (e) => {
    this.setState({ password_1: e.target.value });
  
  };
  handlePassTwoChange = (e) => {
    this.setState({ password_2: e.target.value });
    
    };
    handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password_1,
            passwordTwo:this.state.password_2,
        }
        axios
          .post("api/user/adduser", user)
          .then((res) => alert(res.data))
          .then((err) => console.log(err));
        console.log(user)
    }
  render() {
    return (
      <div className="container">
        <form id="form" className="form" onSubmit={this.handleSubmit}>
          <h2>Register With Us</h2>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleNameChange}
              placeholder="Enter username"
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Enter email"
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={this.state.password_1}
              onChange={this.handlePassOneChange}
              placeholder="Enter password"
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              value={this.state.password_2}
              onChange={this.handlePassTwoChange}
              placeholder="Enter password again"
            />
            <small>Error message</small>
          </div>
          <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
