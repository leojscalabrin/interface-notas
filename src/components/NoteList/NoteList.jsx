import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./styles.css"

class NoteList extends Component {
  
  constructor(){
    super();
    this.state = {notes:[]}
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount(){
    this.props.notes.register(this._newNotes);
  }

  componentWillUnmount(){
    this.props.notes.unregister(this._newNotes);
  }

  _newNotes(notes){
    this.setState({...this.state, notes})
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => {
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
