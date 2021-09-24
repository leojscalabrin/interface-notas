import React, { Component } from "react";
import "./styles.css"

class FormRegister extends Component {
  constructor(){
    super();
    this.title = "";
  }

  handleTitleChange(event){
    this.title = event.target.value
  }

  render() {
    return (
      <form className="form-register">
        <input type="text" placeholder="Título" className='form-register_input' onChange={this.handleTitleChange.bind(this)} />
        <textarea rows={15} placeholder="Escreva sua nota:" className='form-register_input' />
        <button className="form-register_input form-register_submit">Criar nota</button>
      </form>
    );
  }
}

export default FormRegister;
