import React, { Component } from 'react';
import '../css/App.css';
import Nav from '../components/Nav';
import '../css/bootstrap.min.css';
import {Navbar, Form, Button, Card}  from 'react-bootstrap';

class Notes  extends  Component{

    state = {};
    constructor(props) {
        super(props);
        this.state.text = '';
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    buttonClickHandler() {
        this.props.addNoteHandler(this.state.text);
        this.setState({text: ''});
    }

    inputChangeHandler(event) {
        this.setState({text: event.target.value});
    }

    render(){
        return(
            
            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Header>Событие</Card.Header>
                <Card.Body>
                    <Card.Title>Текст события</Card.Title>
                    <div className="container">
                    <div className="row">
                        <div className="input">
                            <input onChange={this.inputChangeHandler} value={this.state.text} className="form-control mr-sm-2" type="text" placeholder="Событие"/>
                        </div>

                    </div>
                    <div className="success">
                        <Button onClick={this.buttonClickHandler}   variant="dark">Сохранить</Button>
					</div>
                </div>

                </Card.Body>

            </Card>

        );
    }
}

export default Notes;