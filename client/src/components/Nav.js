import React,  { Component, Navbar, Form, Button, FormControl }  from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import User from '../api/User';

class Nav extends Component {
    
   state = {};

    constructor(props) {
        super(props);
        this.state.authText = props.isAuthorized ? '' : 'Not authorized';
    }

    updateUserText() {
        User.getUsername()
            .then(username => {
                const authText = 'Authorized as: ' + username;
                this.setState({authText});
            })
            .catch(err => {
                console.log(err);
            });
    }

    logoutHandler = () => {
        User.logout()
            .then(res => {
                const authText = 'Not authorized';
                this.setState({authText});
                this.props.authChangeHandler();
            })
            .catch(err => {
                console.log(err)
            });
    }

    componentDidMount() {
        if (this.props.isAuthorized) {
            this.updateUserText();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuthorized && !prevProps.isAuthorized) {
            this.updateUserText();
        }
    }

	render() {      
	let authButtons;
	
	return (
 
   <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <a className="navbar-brand" href="#">NoteBook</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                 <Link className="nav-link" to="/Auth">Авторизация</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Test">Заметки</Link>
                </li>
				<li className="nav-item">
                <Link className="nav-link" to="/Calendar">Календарь</Link>
                </li>
				<ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link">{this.state.authText}</span>
                        </li>
                    </ul>
                   
            </ul>
            </div>
        </nav>
   
);
   }
}
export default Nav;
