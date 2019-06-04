import React, { Component } from 'react';
import '../css/App.css';
import Nav from '../components/Nav';
import '../css/bootstrap.min.css';
import {Navbar, Form, Button, Card}  from 'react-bootstrap';

class NNotes  extends  Component{

    state = {};
    constructor(props) {
        super(props);
        
        this.state.editing = false;
        this.state.text = props.info.content;
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.textClickHandler = this.textClickHandler.bind(this);
        this.saveClickHandler = this.saveClickHandler.bind(this);
       
    }

    textClickHandler() {
        console.log('text click');
        this.setState({
          editing: true
        });
      }


    saveClickHandler() {
        console.log('save');
        this.setState({
          editing: false
        });
        this.props.editNoteHandler(this.props.info._id, this.state.text);
      }

    inputChangeHandler(event) {
        this.setState({text: event.target.value});
    }

    render(){
         let cardContent;
        
        if (this.state.editing) {
      cardContent = (
        <p className="card-text">
          <input onChange={this.inputChangeHandler} value={this.state.text} className="form-control mr-sm-2" type="text" />
        </p>
      );
    } else {
      cardContent = (
        <p className="card-text" onClick={this.textClickHandler}>
          {this.state.text}
        </p>
      );
    }

    let saveButton;

    if (this.state.editing) {
      saveButton = (<a href="#" onClick={this.saveClickHandler} className="btn btn-outline-success task-save-button">Сохранить</a>);
    }
        return(
            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Header>Событие</Card.Header>
                <Card.Body>
                    {cardContent}
                      <div className="card-body">
                  <a href="#" onClick={(e) => {this.props.deleteNoteHandler(this.props.info._id)}} className="btn btn-danger">Удалить</a>
                  {saveButton}
                </div>
                </Card.Body>
            </Card>

        );
    }
}

export default NNotes;