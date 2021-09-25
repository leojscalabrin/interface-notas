import React, { Component } from 'react';
import FormRegister from './components/FormRegister/FormRegister.jsx';
import NoteList from './components/NoteList/NoteList.jsx';
import "./assets/App.css"
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.notes = [];
  }
  createNote(title, text){
    const newNote = {title, text};
    this.notes.push(newNote);
  }

  render(){
    return (
      <section className="content">
        <FormRegister createNote={this.createNote.bind(this)} />
        <NoteList notes={this.notes} />
      </section>
    );
  }
}

export default App;
