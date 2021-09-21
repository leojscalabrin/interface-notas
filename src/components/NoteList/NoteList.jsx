import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./styles.css"

class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((category, index) => {
          return (
            <li className="note-list_item"  key={index}>
              <div>{category}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
