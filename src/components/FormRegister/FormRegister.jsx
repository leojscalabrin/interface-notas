import React, { Component } from "react";
import "./styles.css";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Sem Categoria";
  }

  _handleCategoryChange(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="form-register" onSubmit={this._createNote.bind(this)}>
        <select
          onChange={this._handleCategoryChange.bind(this)}
          className="form-register_input"
        >
          <option>Sem Categoria</option>
          {this.props.categories.map((category) => {
            return <option>{category}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-register_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota:"
          className="form-register_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-register_input form-register_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormRegister;
