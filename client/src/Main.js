import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import Calendar from './Calendar';
import Auth from './Auth/Auth';
import Cookies from 'js-cookie';
import './css/App.css';
import './css/bootstrap.min.css';
import TPage from './notes/TPage';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends Component{
    state = {};

    constructor(props) {
        super(props);
        this.state.isAuthorized = this.getIsAuthorized();
    }

    getIsAuthorized() {
        return !!Cookies.get('sid');
    }

    authChangeHandler = () => {
        const isAuthorized = this.getIsAuthorized();
        this.setState({ isAuthorized })
    }
    
    render() {
        return(
            <div>
            <main>
                <Switch>
                    <Route path='/Auth' component = {Auth}/>
                    <Route path='/Test' render={(props) => <TPage {...props} isAuthorized={this.state.isAuthorized} />}/>
					<Route path='/Calendar' render={(props) => <TPage {...props} isAuthorized={this.state.isAuthorized} />}/>
                </Switch>
            </main>
            </div>
            )
}
}

export default Main;