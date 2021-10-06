import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./styles.css"

class NoteList extends Component {
  
  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="note-list_item"  key={index}>

              <NoteCard 
              noteIndex={index}
              removeNote={this.props.removeNote}
              title={note.title} 
              text={note.text}
              category={note.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
