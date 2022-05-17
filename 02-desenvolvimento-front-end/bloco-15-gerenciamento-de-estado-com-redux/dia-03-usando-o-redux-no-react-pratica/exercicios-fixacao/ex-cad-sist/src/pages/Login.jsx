import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
  }

  handleChange = (event) => {    
    const {id, value} = event.target;
    this.setState({[id]: value });
  }

  render() {
    return (
      <>
        <h2>LOGIN</h2>
        <label htmlFor="email" >
          E-mail: <input id="email" type="email" placeholder='Digite seu email' onChange={this.handleChange} />
        </label>

        <label htmlFor="password">
          Senha: <input id="password" type="password" placeholder='Digite sua senha' onChange={this.handleChange} />
        </label>
        <br /><br />
        <Link to="/">Voltar</Link>
      </>
    );
  }
};

export default Login;

