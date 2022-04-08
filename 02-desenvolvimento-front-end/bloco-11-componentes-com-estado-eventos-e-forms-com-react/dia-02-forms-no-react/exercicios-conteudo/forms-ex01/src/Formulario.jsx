import React from 'react';

class Forms extends React.Component {
  // O constructor serve basicamente pra poder definir o state inicial? Como nem o bind é necessário (e já li alguma coisa que SEQUER O SUPER é necessário) qual é a utilidade disso?
  constructor() {
    super()

    // this.inputHandler = this.inputHandler.bind(this); // <---- Não é necessário qdo usar arrow function

    this.state = {
      nome: 'Escreva seu nome',
      texto: 'Escreva um texto...',
    };
  }

  // inputHandler = (event) => {
  //   this.setState({
  //     nome: event.target.value,
  //   });
  // }

  genericHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        < form >
          <label>Selecione a opção: </label>
          <select>
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
            <option value="3">Opção 3</option>
          </select>
          <br />
          <label htmlFor="name">
            Nome: <input id="name" name="nome"
              value={this.state.nome}
              onChange={this.genericHandler}
            />
          </label><br />
          <label htmlFor="alive">
            Está vivo? <input type="checkbox" id="alive" />
          </label><br />
          <textarea cols="30" rows="10" name="texto"
            onChange={this.genericHandler}
            value={this.state.texto}
          />
        </form >
        <section>
          <br /><br /><br />
          {this.state.nome}<br />
          {this.state.texto}
        </section>
      </div>
    );
  }
}

export default Forms;