import React, { Component } from "react";
import NoteCard from "./NoteCard";

class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((category) => {
          return (
            <li>
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
