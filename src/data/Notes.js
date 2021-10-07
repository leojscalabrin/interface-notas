export default class NoteArray{
    constructor(){
        this.notes = [];
        this._registered = [];
    }

    addNote(title, text, category){
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
    }

    deleteNote(index){
        this.notes.splice(index, 1);
    }

    register(func){
        this._registered.push(func);
    }

    notify(){
        this._registered.forEach(func => func(this.categories));
    }
}

class Note{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this. category = category;
    }
}