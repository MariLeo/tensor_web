import React, {Component} from 'react';

class NoteForm extends Component {
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

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="input">
                        <input onChange={this.inputChangeHandler} value={this.state.text}
                               className="form-control mr-sm-2" type="text" placeholder="Событие"/>
                    </div>

                    <button onClick={this.buttonClickHandler} className="btn success">Добавить</button>
					<button onClick = {this.emailClickHandler} >Отправить заметку на email</button>
                </div>
            </div>

        );
    }
}

export default NoteForm;