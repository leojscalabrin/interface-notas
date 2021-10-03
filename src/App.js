import React, { Component } from "react";
import FormRegister from "./components/FormRegister/FormRegister.jsx";
import NoteList from "./components/NoteList/NoteList.jsx";
import CategoryList from "./components/CategoryList/CategoryList.jsx";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: [],
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newNoteArray = [...this.state.notes, newNote];
    const newState = {
      notes: newNoteArray,
    };
    this.setState(newState);
  }

  addCategory(categoryName){
    const newCategoryArray = [...this.state.categories, categoryName]
    const newState = {...this.state, categories: newCategoryArray};
    this.setState(newState);
  }

  deleteNote(index) {
    let noteArray = this.state.notes;
    noteArray.splice(index, 1);
    this.setState({ notes: noteArray });
  }

  render() {
    return (
      <section className="content">
        <FormRegister createNote={this.createNote.bind(this)} />
        <main className="main-content">
          <CategoryList
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories}
          />
          <NoteList
            removeNote={this.deleteNote.bind(this)}
            notes={this.state.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
