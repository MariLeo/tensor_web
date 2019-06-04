import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import Notes from './Notes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class NotesPage extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state.notes = [];
    }

    deleteAllNoteHandler = () => {
        Notes.deleteAll().then(() => {
            this.reloadNotes();
        })
    }

    deleteNoteHandler = (id) => {
        Notes.delete(id).then(() => {
            this.reloadNotes();
        })
    }

    addNoteHandler = (text) => {
        Notes.add(text).then(() => {
            this.reloadNotes();
        })
    }

    editNoteHandler = (id, text) => {
        Notes.edit(id, text).then(() => {
            this.reloadNotes();
        })
    }

    reloadNotes = () => {
        Notes.getAll().then((notes) => {
            this.setState({ 'notes': notes })
        });
    }

    componentDidMount() {
        if (this.props.isAuthorized) {
            this.reloadNotes();
        }
    }

    render() {
        let pageContent;

        if (this.props.isAuthorized) {
            pageContent = (
                 <div>
					<Notes addNoteHandler={this.addNoteHandler}/>;
					<NoteList notes={this.state.notes} deleteNoteHandler={this.deleteNoteHandler} editNoteHandler={this.editNoteHandler}/>
            </div>
            );
        } else {
            pageContent = (
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <h3>You need to <Link to="/auth/">authorize</Link> to access this page.</h3>
                        </div>
                    </div>  
                </div>
            )
        }

        return pageContent;
    }
}

export default NotesPage;