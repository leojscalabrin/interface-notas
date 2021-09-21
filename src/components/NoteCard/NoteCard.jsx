import React, { Component } from "react";
import "./styles.css"

class NoteCard extends React.Component {
  render() {
    return (
      <section className="note-card">
          <header className="note-card_header">
          <h3 className="note-card_title">Título</h3>
          </header>
          <p className="note-card_text">Escreva sua nota</p>
      </section>
    );
  }
}

export default NoteCard;
