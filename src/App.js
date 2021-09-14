import React, { Component } from 'react';
import FormRegister from './components/FormRegister';
import NoteList from './components/NoteList';

class App extends Component {
  render(){
    return (
      <section>
        <FormRegister/>
        <NoteList/>
      </section>
    );
  }
}

export default App;
