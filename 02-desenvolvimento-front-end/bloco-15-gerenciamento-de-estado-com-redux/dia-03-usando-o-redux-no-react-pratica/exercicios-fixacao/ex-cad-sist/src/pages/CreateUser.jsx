import React, { Component } from 'react';

class NewUser extends Component {
  render() {
    return (
      <>
        <label htmlFor="name">
          Nome: <input type="text" name="name" id="name" />
        </label>

        <label htmlFor="age">
          Idade: <input type="number" name="age" id="age" maxLength="3" />
        </label>

        <label htmlFor="email">
          E-mail: <input type="email" name="email" id="email" />
        </label>
      </>
    );
  }
};

export default NewUser;
