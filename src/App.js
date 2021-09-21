import React, { Component } from 'react';
import FormRegister from './components/FormRegister/FormRegister.jsx';
import NoteList from './components/NoteList/NoteList.jsx';
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render(){
    return (
      <section className="content">
        <FormRegister/>
        <NoteList/>
      </section>
    );
  }
}

export default App;
