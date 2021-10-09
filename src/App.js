import React, { Component } from "react";
import FormRegister from "./components/FormRegister/FormRegister.jsx";
import NoteList from "./components/NoteList/NoteList.jsx";
import CategoryList from "./components/CategoryList/CategoryList.jsx";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./data/Categories.js";
import NoteArray from "./data/Notes.js";

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NoteArray();
  }

  render() {
    return (
      <section className="content">
        <FormRegister
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="main-content">
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NoteList
            removeNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
