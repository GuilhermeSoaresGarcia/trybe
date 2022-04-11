import React from 'react';
import estados from './data/estados';
import './PersonalData.css';

class PersonalData extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: 0,
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: name === 'nome' ? value.toUpperCase() : value,
    })
  }

  render() {
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome: <input name="nome" id="name" autoComplete="off"
            value={this.state.nome}
            onChange={this.handleChange} />
        </label>

        <label htmlFor="email">
          E-mail: <input type="email" name="email" id="email"
            value={this.state.email}
            onChange={this.handleChange} required />
        </label>

        <label htmlFor="cpf">
          CPF: <input type="number" name="cpf" id="cpf"
            value={this.state.cpf}
            onChange={this.handleChange} />
        </label>

        <label htmlFor="endereco">
          Endereço: <input name="endereco" id="address"
            value={this.state.endereco}
            onChange={this.handleChange} required />
        </label>

        <label htmlFor="cidade">
          Cidade: <input name="cidade" id="city"
            value={this.state.cidade}
            onChange={this.handleChange} />
        </label>

        <label htmlFor="estado">
          Estado: <select name="estado" id="state"
            onChange={this.handleChange}>
            <option value="" required></option>
            {estados.map((estado) => (
              <option key={estado.sigla} value={estado.sigla}>
                {estado.nomeEstado} - {estado.sigla}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="moradia" onChange={this.handleChange} required>
          Tipo: <label htmlFor="casa">Casa
            <input type="radio" name="moradia" id="casa" value="casa" />
          </label>
          <label htmlFor="ap">Apartamento
            <input type="radio" name="moradia" id="ap" value="apartamento" />
          </label>
        </label>

      </fieldset>
    )
  }
}

export default PersonalData;
