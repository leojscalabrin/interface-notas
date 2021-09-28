import React, { Component } from 'react';
import FormRegister from './components/FormRegister/FormRegister.jsx';
import NoteList from './components/NoteList/NoteList.jsx';
import "./assets/App.css"
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  createNote(title, text){
    const newNote = {title, text};
    const newNoteArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNoteArray
    }
    this.setState(newState)
  }

  deleteNote(index){
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    this.setState({notes:noteArray})
  }

  render(){
    return (
      <section className="content">
        <FormRegister createNote={this.createNote.bind(this)} />
        <NoteList 
        removeNote={this.deleteNote.bind(this)}
        notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
