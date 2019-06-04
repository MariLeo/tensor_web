import React, { Component } from 'react';
import NNotes from './NNotes';


class NoteList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" id="note-list">
                    {this.props.notes.map((note) => {
                        return (<NNotes key={note._id} info={note} deleteNoteHandler={this.props.deleteNoteHandler} editNoteHandler={this.props.editNoteHandler}/>)
                    })}
                </div>
            </div>
        );
    }
}

export default NoteList;